package reports

import org.apache.poi.ss.usermodel.*
import org.apache.poi.xssf.usermodel.XSSFWorkbook
import org.apache.poi.ss.util.CellRangeAddress
import java.io.ByteArrayOutputStream

val customFormats = mutableMapOf<String, Short>()
class FlashReport {

    fun generateReport(): ByteArray {
        val wb = XSSFWorkbook()
        val sheet = wb.createSheet("Flash")
        val boldFont = wb.createFont()
        boldFont.bold = true
        boldFont.color=IndexedColors.BLUE.index

        customFormats["currency"] = wb.createDataFormat().getFormat("$#,##0.00")
        customFormats["percent"] = wb.createDataFormat().getFormat("0.0%")


        // Date Row
        val dr = sheet.createRow(2)
        createCell(dr, 0, "Date:", boldFont)
        createCell(dr, 1, "1/31/24", boldFont)

// Summary Table
// Summary Row
        val sR = sheet.createRow(4)
        createCell(sR, 1, "AUM Summary ($'mm)", boldFont)
        sheet.addMergedRegion(CellRangeAddress(sR.rowNum,sR.rowNum,1,4))

//  Headers Row of Summary Table
        val tRow = sheet.createRow(5)
        createCell(tRow,1, "Commitments")
        createCell(tRow,2, "Capital Called/Deployed")
        createCell(tRow,3, "Unfunded Commitments")
        createCell(tRow,4, "% Called / Deployed")

// Data Row of Summary Table
        val dRS1 = sheet.createRow(6)
        createCell(dRS1, 0, "OAS-Main Fund")
        createCell(dRS1, 1, 656.0, format = customFormats["currency"])
        createCell(dRS1, 2, 90.0, format = customFormats["currency"])
        createCell(dRS1, 3, 566.0, format = customFormats["currency"])
        createCell(dRS1, 4, 13.7, format = customFormats["percent"])

        val dRS2 = sheet.createRow(7)
        createCell(dRS2, 0, "Pavo - TRS")
        createCell(dRS2, 1, 250.0, format = customFormats["currency"])
        createCell(dRS2, 2, 43.0, format = customFormats["currency"])
        createCell(dRS2, 3, 207.0, format = customFormats["currency"])
        createCell(dRS2, 4, 17.2, format = customFormats["percent"])

        val dRS3 = sheet.createRow(8)
        createCell(dRS3, 0, "Creo-Co-Invest-Fund")
        createCell(dRS3, 1, 350.0, format = customFormats["currency"])
        createCell(dRS3, 2, 110.0, format = customFormats["currency"])
        createCell(dRS3, 3, 240.0, format = customFormats["currency"])
        createCell(dRS3, 4, 31.4, format = customFormats["percent"])

        val dRS4 = sheet.createRow(9)
        createCell(dRS4, 0, "Programmatic Co-Invest Fund")
        createCell(dRS4, 1, 150.0, format = customFormats["currency"])
        createCell(dRS4, 2, 0.0, format = customFormats["currency"])
        createCell(dRS4, 3, 150.0, format = customFormats["currency"])
        createCell(dRS4, 4, 0.0, format = customFormats["percent"])

        val dRS5 = sheet.createRow(10)
        createCell(dRS5, 0, "GIC Co-Invest Fund")
        createCell(dRS5, 1, 480.0, format = customFormats["currency"])
        createCell(dRS5, 2, 0.0, format = customFormats["currency"])
        createCell(dRS5, 3, 480.0, format = customFormats["currency"])
        createCell(dRS5, 4, 0.0, format = customFormats["percent"])

        val dRS6 = sheet.createRow(11)
        createCell(dRS6, 0, "Appia (External Commitments)")
        createCell(dRS6, 1, 240.0, format = customFormats["currency"])
        createCell(dRS6, 2, 240.0, format = customFormats["currency"])
        createCell(dRS6, 3, 0.0, format = customFormats["currency"])
        createCell(dRS6, 4, 100.0, format = customFormats["percent"])

        val dRS7 = sheet.createRow(12)
        createCell(dRS7, 0, "Total")
        createSumCell(dRS7,6,1,11,1,1)
        createSumCell(dRS7,6,2,11,2,2)
        createSumCell(dRS7,6,3,11,3,3)
        createSumCell(dRS7,6,4,11,4,4)

        //  LuminArx OAS Main Fund Section
        val dRS8 = sheet.createRow(14)
        createCell(dRS8, 0, "LuminArx OAS - Main Fund", font = boldFont)

        val dRS9 = sheet.createRow(15)
        createCell(dRS9,4,"P&L($'mm)")
        createCell(dRS9,8,"Gross Return")
        createCell(dRS9,12,"Market Value($'mm)")

        val dRS10 = sheet.createRow(16)
        createCell(dRS10, 0, "Deal Name")
        createCell(dRS10, 1, "Deal Date")
        createCell(dRS10, 2, "Asset Class")
        createCell(dRS10, 3, "Est NAV")
        createCell(dRS10, 4, "DTD")
        createCell(dRS10, 5, "MTD")
        createCell(dRS10, 6, "YTD")
        createCell(dRS10, 7, "ITD")
        createCell(dRS10, 8, "DTD")
        createCell(dRS10, 9, "MTD")
        createCell(dRS10, 10, "YTD")
        createCell(dRS10, 11, "ITD")
        createCell(dRS10, 12, "Long")
        createCell(dRS10, 13, "Short")
        createCell(dRS10, 14, "Gross")
        createCell(dRS10, 15, "Leverage")

        val dRS11 = sheet.createRow(17)
        createCell(dRS11, 0, "ECM")
        createCell(dRS11, 1, "Sept-23")
        createCell(dRS11, 2, "CMS")
        createCell(dRS11, 3, 32.0)
        createCell(dRS11, 4, 0.12)
        createCell(dRS11, 5, 0.14)
        createCell(dRS11, 6, 0.14)
        createCell(dRS11, 7, 2.32)
        createCell(dRS11, 8, 0.37)
        createCell(dRS11, 9, 0.00)
        createCell(dRS11, 10, 0.43)
        createCell(dRS11, 11, 8.62)
        createCell(dRS11, 12, 12)
        createCell(dRS11, 13, -11)
        createCell(dRS11, 14, 23)
        createCell(dRS11, 15, 0.72)


        val outputStream = ByteArrayOutputStream()
        wb.write(outputStream)
        return outputStream.toByteArray()
    }

    fun createCell(row: Row, columnIndex: Int, value: Any?, font: Font? = null, format: Short? = null) {
        val cell = row.createCell(columnIndex)
        when (value) {
            is String -> cell.setCellValue(value)
            is Double -> cell.setCellValue(value)
            is Boolean -> cell.setCellValue(value)
            else -> cell.setCellValue("")
        }
        if (font != null){
            cell.cellStyle.setFont(font)
            cell.cellStyle.fillBackgroundColor=IndexedColors.BLUE.index
            cell.cellStyle.fillPattern=FillPatternType.SOLID_FOREGROUND
        }
        if(format !=null){
            cell.cellStyle.dataFormat=format
        }
    }

    fun createSumCell(row: Row, startRow: Int, startCol: Int, endRow: Int, endCol: Int, colIndex: Int){
        val sumCell = row.createCell(colIndex, CellType.FORMULA)
        val startCell = cellRef(startRow, startCol)
        val endCell = cellRef(endRow, endCol)
        sumCell.cellFormula= "IFERROR(SUM($startCell:$endCell),0)"
    }

    fun formulaForSum(startRow: Int, startCol: Int, endRow: Int, endCol: Int): String {
        val startCell = cellRef(startRow, startCol)
        val endCell = cellRef(endRow, endCol)
        return "SUM($startCell:$endCell)"
    }

    fun formulaForPercentage(row: Row, dataCol: Int, denominatorCol: Int): String {
        val dataCellRef = cellRef(row.rowNum, dataCol)
        val denominatorCellRef = cellRef(row.rowNum, denominatorCol)
        return "=($dataCellRef/$denominatorCellRef)*100"
    }

    fun cellRef(row: Int, col: Int): String {
        val colLetter = ('A' + col).toChar()
        return "$colLetter${row + 1}"
    }

}