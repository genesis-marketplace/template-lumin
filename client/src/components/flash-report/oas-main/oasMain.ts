import {css, customElement, FASTElement, html, ref} from "@microsoft/fast-element";
import {GridPro} from "@genesislcap/foundation-zero-grid-pro";
import {Connect} from "@genesislcap/foundation-comms";
import {cellStyle, centerRender, currencyFormatter, mcFormatter, mcLFormatter} from "../../../utils/formatters";

const colDef = [
    {headerName:"General",
        children: [
            {field:"DEAL", headerName:"Deal"},
            {field:"DEAL_DATE", headerName: "Deal Date", editable: true},
            {field: "ASSET_CLASS", headerName: "Asset Class", editable: true},
            {field: "ESTIMATED_NAV", headerName: "Est NAV",
                editable: true,
                cellStyle:(params) => cellStyle(params),
                valueFormatter: params => currencyFormatter(params.data?.ESTIMATED_NAV,"$"),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
        ]
    },

    { headerName: "P&L($'mm)",
        children:[
            {field: "SDPNL", headerName: "DTD",
                valueFormatter: params => mcFormatter(params.data?.SDPNL,"$"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "SMTDPNL", headerName: "MTD",
                valueFormatter: params => mcFormatter(params.data?.SMTDPNL,"$"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "SYTDPNL", headerName: "YTD",
                valueFormatter: params => mcFormatter(params.data?.SYTDPNL,"$"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "SITDPNL", headerName: "ITD",
                valueFormatter: params => mcFormatter(params.data?.SITDPNL,"$"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
        ]
    },
    {headerName: "Gross Return",

        children:[
            {field: "GR_DTD", headerName: "DTD",
                valueFormatter: params => mcFormatter(params.data?.GR_DTD,"$"),
                cellStyle:(params) => cellStyle(params),
                editable: true,
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "GR_MTD", headerName: "MTD",
                valueFormatter: params => mcFormatter(params.data?.GR_MTD,"$"),
                cellStyle:(params) => cellStyle(params),
                editable: true,
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "GR_YTD", headerName: "YTD",
                valueFormatter: params => mcFormatter(params.data?.GR_YTD,"$"),
                cellStyle:(params) => cellStyle(params),
                editable: true,
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "GR_ITD", headerName: "ITD",
                valueFormatter: params => mcFormatter(params.data?.GR_ITD,"$"),
                cellStyle:(params) => cellStyle(params),
                editable: true,
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
        ]
    },
    {headerName: "Market Value($'mm)",
        children:[
            {field: "S_DELTA_ADJ_LMV", headerName: "Long",
                valueFormatter: params => mcFormatter(params.data?.S_DELTA_ADJ_LMV,"$"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "S_DELTA_ADJ_SMV", headerName: "Short",
                valueFormatter: params => mcFormatter(params.data?.S_DELTA_ADJ_SMV,"$"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "GROSS", headerName: "Gross",
                valueFormatter: params => mcFormatter(params.data?.GROSS,"$"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
            {field: "LEVERAGE", headerName: "Leverage",
                valueFormatter: params => mcLFormatter(params.data?.LEVERAGE,"x"),
                cellStyle:(params) => cellStyle(params),
                headerClass: 'ag-right-aligned-header',
                minWidth: 100,
            },
        ]
    }
]

@customElement({
    name: "oas-main",
    template: html<OasMain>`
        <zero-grid-pro @onGridReady="${(x) => x.oasGridReady()}"
                       ${ref('oasGrid')}
        >
            <grid-pro-genesis-datasource
                    resource-name="ALL_LUMIN_OAS"
                    :deferredGridOptions=${(x) => x.oasGridOptions}
            ></grid-pro-genesis-datasource>
        </zero-grid-pro>
    `
})
export class OasMain extends  FASTElement{
    @Connect connect: Connect
    oasGrid: GridPro;
    oasGridOptions = {

    }
     oasGridReady() {
        console.log("lumin|oas-main|oasGridReady")
         this.oasGrid.gridApi.setColumnDefs(colDef)
         this.oasGrid.gridApi.sizeColumnsToFit()
         this.oasGrid.gridApi.addEventListener('cellValueChanged', this.updateOasMain)
    }

    private updateOasMain = (e) => {
        const detail = e.data
        this.connect.commitEvent('EVENT_UPDATE_OAS_MAIN', {DETAILS: detail, VALIDATE: false, IGNORE_WARNINGS:true})
            .then(result => {
                console.log("lumin|oas-main|updateOasMain =>", result.REPLY)
            })
    }
}