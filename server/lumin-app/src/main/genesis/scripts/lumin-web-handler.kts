@file:ScriptModules("lumin")
import global.genesis.router.extension.transform.response.FileDownload
import reports.FlashReport
import java.io.ByteArrayInputStream

webHandlers {
    val flashReportHandler = injector<FlashReport>()
    endpoint(POST, "flash-report"){
        handleRequest {
            LOG.info("Trying to download the flash-report")
            val content = flashReportHandler.generateReport()
//            val content = "Place holder for flash report once PA-1171 is resolved".toByteArray()
            FileDownload(
                fileName = "flash-report.xls",
                inputStream = ByteArrayInputStream(content),
                size = content.size.toLong()
            )
        }
    }
}



