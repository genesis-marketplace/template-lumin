ext.set("localDaogenVersion", "LUMIN")

plugins {
    `maven-publish`
}

subprojects {
    apply(plugin = "org.gradle.maven-publish")

    tasks {
        withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
            kotlinOptions {
                freeCompilerArgs = listOf("-Xjsr305=strict", "-Xjvm-default=all")
                jvmTarget = "17"
            }
        }
    }
}

tasks {
    assemble {
        for(subproject in subprojects){
            dependsOn(subproject.tasks.named("assemble"))
        }
    }
    build {
        for(subproject in subprojects){
            dependsOn(subproject.tasks.named("build"))
        }
    }
    clean {
        for(subproject in subprojects){
            dependsOn(subproject.tasks.named("clean"))
        }
    }
}

allprojects {

    group = "global.genesis"
    version = "1.0.0-SNAPSHOT"


    kotlin {
        jvmToolchain {
            (this as JavaToolchainSpec).languageVersion.set(JavaLanguageVersion.of(17))
        }
    }
    tasks.withType<Jar> {
        duplicatesStrategy = DuplicatesStrategy.WARN
    }

    java {
        toolchain {
            languageVersion.set(JavaLanguageVersion.of(17))
        }
    }

    repositories {
        mavenLocal {
            // VERY IMPORTANT!!! EXCLUDE AGRONA AS IT IS A POM DEPENDENCY AND DOES NOT PLAY NICELY WITH MAVEN LOCAL!
            content {
                excludeGroup("org.agrona")
            }
        }
        mavenCentral()
        maven {
            val repoUrl = if(properties["clientSpecific"] == "true") {
                "https://genesisglobal.jfrog.io/genesisglobal/libs-release-client"
            } else {
                "https://genesisglobal.jfrog.io/genesisglobal/dev-repo"
            }
            url = uri(repoUrl)
            credentials {
                username = properties["genesisArtifactoryUser"].toString()
                password = properties["genesisArtifactoryPassword"].toString()
            }
        }
    }

    publishing {
        publications.create<MavenPublication>("maven") {
            from(components["java"])
        }
    }
}

