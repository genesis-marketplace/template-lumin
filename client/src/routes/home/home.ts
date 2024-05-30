import {customElement, FASTElement, observable} from '@microsoft/fast-element';
import { HomeStyles as styles } from './home.styles';
import { HomeTemplate as template } from './home.template';
import {GridPro, GridProGenesisDatasource} from "@genesislcap/foundation-zero-grid-pro";
import {
  positionByDeal, positionByTag,
  positionFields,
  positionSummaryByFColDef,
  positionSummaryColDef,
  strategySummaryColDef
} from '../../utils/column-def';
import {Connect, Session} from "@genesislcap/foundation-comms";
import {getEndpointUrl} from "../../utils";
import {downloadFile} from '@genesislcap/foundation-ui';

@customElement({
  name: 'home-route',
  template,
  styles,
})
export class Home extends FASTElement {
  fundSummaryGrid : GridPro
  strategySummaryGrid : GridPro
  positionGrid : GridPro
  fNSummaryGrid: GridPro
  dSummaryGrid: GridPro
  tSummaryGrid: GridPro
  positionDataSource: GridProGenesisDatasource
  @Session session: Session
  @Connect connect : Connect;
  @observable gridOptions= {
    sideBar: {
      toolPanels: ['columns', 'filters']
    },
  };
  constructor() {
    super();
  }

  fGridReady() {
    this.fundSummaryGrid.gridApi.addEventListener('rowClicked', this.onFRowClicked);
    this.fundSummaryGrid.gridApi.setColumnDefs(positionSummaryColDef)
    this.fundSummaryGrid.gridApi.sizeColumnsToFit({
      defaultMinWidth: 130,
      columnLimits:[{key: 'FUND_NAME',minWidth:300}]
    })
  }

  sGridReady() {
    this.strategySummaryGrid.gridApi.setColumnDefs(strategySummaryColDef)
    this.strategySummaryGrid.gridApi.addEventListener('rowClicked', this.onSRowClicked)
    this.strategySummaryGrid.gridApi.sizeColumnsToFit({
      defaultMinWidth: 150,
      columnLimits:[{key: 'STRATEGY',minWidth:200}]
    })
  }

  private onFRowClicked = (e) => {
    if (e.node?.data) {
      const id = e.node?.data.FUND_NAME
      this.updatePositionCriteriaForFundName(id)
    }
  }

  private onSRowClicked = (e) => {
    console.log(e.node?.data)
    if(e.node?.data){
      const id = e.node?.data.STRATEGY
      this.updatePositionCriteriaForStrategy(id)
    }
  }

  private updatePositionCriteriaForFundName(id: string){
    this.positionDataSource.criteria = `FUND_NAME == '${id}'`
  }

  private updatePositionCriteriaForStrategy(id: string){
    this.positionDataSource.criteria = `STRATEGY == '${id}'`
  }

  PGridReady() {
    console.log('on position grid ready')
    const colDefs = this.positionGrid.gridApi.getColumnDefs();
    this.positionGrid.gridApi.setColumnDefs(colDefs)
    const columnDefs: any[] = [];
    positionFields.forEach((a) => {
      let columnDef: any = {
        field: a,
        headerName: a,
        editable: true,
        filter: true,
        pivot: true,
        enableRowGroup: true
      }
      columnDefs.push(columnDef);
    })
    console.log(columnDefs)
    this.positionGrid.gridApi.setColumnDefs(columnDefs);
    this.positionGrid.gridApi.sizeColumnsToFit({
      defaultMinWidth: 100,
      columnLimits:[
        {key:'FUND_NAME',minWidth: 250},
        {key:'STRATEGY',minWidth: 200},
        {key:'SUB_STRATEGY',minWidth: 200},
        {key:'BOOK_NAME',minWidth: 200},
        {key:'POSITION_DESC',minWidth: 200},
        {key:'BB_YELLOW_KEY',minWidth: 200},
      ]
    });
    this.positionGrid.gridApi.addEventListener('cellValueChanged', this.valueUpdated)
  }


  private valueUpdated = (e) => {
    const detail = e.data
  this.connect.commitEvent('EVENT_POSITION_UPDATE', {DETAILS: detail, VALIDATE: false, IGNORE_WARNINGS: true}).then(r =>
  console.log('position has been successfully updated::  ', r)
  )
  }

  exportFundSummaryGrid() {
    console.log("exporting summary grid ")
    this.fundSummaryGrid.gridApi.exportDataAsCsv();
  }

  exportStrategySummaryGrid() {
    console.log("exporting summary grid ")
    this.strategySummaryGrid.gridApi.exportDataAsCsv();
  }
  fNGridReady() {
    this.fNSummaryGrid.gridApi.setColumnDefs(positionSummaryByFColDef)
  }

  dGridReady() {
    this.dSummaryGrid.gridApi.setColumnDefs(positionByDeal)
  }


  tGridReady() {
    this.tSummaryGrid.gridApi.setColumnDefs(positionByTag)
  }

    generateFlashReport(): Promise<void> {
      console.log("lumin|home|generateFlashReport")
      const endpoint = 'lumin/flash-report';
      const filename = `flash-report.xls`;
      downloadFile(getEndpointUrl(endpoint),
          filename,
          this.session.getSessionStorageItem('authToken'),
          'POST',
          true,
          {}
      );
      return Promise.resolve()
    }
}
