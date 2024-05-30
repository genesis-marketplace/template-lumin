import {customElement, FASTElement, html, observable, ref} from "@microsoft/fast-element";
import {GridPro} from "@genesislcap/foundation-zero-grid-pro";
import {Connect} from "@genesislcap/foundation-comms";
import {asColDef} from '../../../utils/column-def'
import {AumSummaryStatus} from "./aumSummaryStatus";



@customElement({
    name:'aum-summary',
    template:html<AumSummary>`
        <zero-grid-pro @onGridReady="${(x) => x.summaryGridReady()}"
                       ${ref('aSummaryGrid')}
        >
            <grid-pro-genesis-datasource resource-name="ALL_AUM_SUMMARY"
                                         :deferredGridOptions=${(x) => x.asGridOptions}
            >
                
            </grid-pro-genesis-datasource>
        </zero-grid-pro>
    `,
})
export class AumSummary extends  FASTElement{
    @Connect connect: Connect
    aSummaryGrid: GridPro
    asGridOptions= {
        statusBar:{
            statusPanels:[
                {
                    statusPanel: AumSummaryStatus,
                    align:'left'
                },
            ]
        }
    };
     summaryGridReady() {
        console.log('lumin|aum-summary|summaryGridReady')
        this.aSummaryGrid.gridApi.setColumnDefs(asColDef)
        this.aSummaryGrid.gridApi.addEventListener(
            'cellValueChanged',this.valueUpdated
        )
    }

    private valueUpdated = (e) =>{
        console.log('lumin|aum-summary|summaryGridReady|valueUpdated',e.data)
        const detail = e.data
        this.connect.commitEvent('EVENT_UPDATE_AUM_SUMMARY', {
            DETAILS: detail,
            VALIDATE: false,
            IGNORE_WARNINGS: true
        }).then(r => {
            console.log('update result for summaryGridReady ==> ',r)
        })
    }
}
