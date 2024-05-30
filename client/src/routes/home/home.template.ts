import {html, ref} from '@microsoft/fast-element';
import type { Home } from './home';

export const HomeTemplate = html<Home>`
  <!-- insert template code here -->
  <div style="display: flex; justify-content: space-between; align-items: center;">
      <zero-label style="padding-left: 10px">Positions Dashboard</zero-label>
      <div>
          <zero-button appearance='accent' @click="${(x) => x.exportFundSummaryGrid() }">Export Fund Summary</zero-button>
          <zero-button appearance='accent' @click="${(x) => x.exportStrategySummaryGrid() }">Export Strategy Summary</zero-button>
      </div>
  </div>
  <div style="height: 36%; width: 100%; padding-bottom: 10px; overflow: auto; display: flex">
      <zero-card>
          <zero-tabs>
              <zero-tab id="pbf">Position By Fund</zero-tab>
              <zero-tab id="pbd">Position By Deal</zero-tab>
              <zero-tab id="pbt">Position By Tag</zero-tab>
              <zero-tab-panel id="pbf" style="height: 280px;">
                  <zero-grid-pro @onGridReady="${(x) => x.fNGridReady()}"
                                 ${ref('fNSummaryGrid')}>
                      <grid-pro-genesis-datasource resource-name="POSITION_BY_F_NAME"></grid-pro-genesis-datasource>
                  </zero-grid-pro>
              </zero-tab-panel>
              <zero-tab-panel id="pbd" style="height: 280px;">
                  <zero-grid-pro @onGridReady="${(x) => x.dGridReady()}"
                  ${ref('dSummaryGrid')}>
                      <grid-pro-genesis-datasource resource-name="POSITION_BY_DEAL"></grid-pro-genesis-datasource>
                  </zero-grid-pro>
              </zero-tab-panel>
              <zero-tab-panel id="pbt" style="height: 280px;">
                  <zero-grid-pro @onGridReady="${(x) => x.tGridReady()}"
                                 ${ref('tSummaryGrid')} >
                      <grid-pro-genesis-datasource resource-name="POSITION_BY_TAG"></grid-pro-genesis-datasource>
                  </zero-grid-pro>
              </zero-tab-panel>
          </zero-tabs>
      </zero-card>
      <zero-card style="padding-left: 10px">
          <zero-tabs activeid="pByFund">
              <zero-tab id="pByFund">Position By Fund</zero-tab>
              <zero-tab id="pByStrategy">Position By Strategy</zero-tab>
              <zero-tab-panel id="pByFund" style="height: 280px;">
                  <zero-grid-pro @onGridReady="${(x) => x.fGridReady()}"
                                 ${ref('fundSummaryGrid')}
                                 style="padding-right: 10px;height: 100%"
                                 
                  >
                      <grid-pro-genesis-datasource resource-name="POSITION_BY_FUND_NAME">
                      </grid-pro-genesis-datasource>
                  </zero-grid-pro>        
              </zero-tab-panel>
              <zero-tab-panel id="pByStrategy" style="height: 280px;">
                  <zero-grid-pro @onGridReady="${(x) => x.sGridReady()}"
                                 ${ref('strategySummaryGrid')}>
                      <grid-pro-genesis-datasource resource-name="POSITION_BY_STRATEGY">
                      </grid-pro-genesis-datasource>
                  </zero-grid-pro>       
              </zero-tab-panel>
          </zero-tabs>
      </zero-card>
  </div>
  <div style="width: 100%; height: 58%">
      <zero-grid-pro @onGridReady="${(x) => x.PGridReady()}" 
              ${ref('positionGrid')}>
          <grid-pro-genesis-datasource 
                resource-name="ALL_POSITIONS" 
                ${ref('positionDataSource')}
                :deferredGridOptions=${(x) => x.gridOptions}
          >
          </grid-pro-genesis-datasource>
      </zero-grid-pro>

  </div>
`;
