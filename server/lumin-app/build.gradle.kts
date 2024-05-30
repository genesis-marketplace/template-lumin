dependencies {
    implementation("org.apache.poi:poi-ooxml:5.2.5")
    implementation("com.h2database:h2:2.2.224")
    compileOnly(genesis("script-dependencies"))
    genesisGeneratedCode(withTestDependency = true)
}

description = "lumin-app"

sourceSets {
    main {
        resources {
            srcDirs("src/main/resources", "src/main/genesis")
        }
    }
}

tasks {
    copyDependencies {
        enabled = false
    }
}
