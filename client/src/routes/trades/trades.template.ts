import {html, ref} from '@microsoft/fast-element';
import type { Trades } from './trades';
import {
    counterPartyColDef,
    custodianColDef, summaryDealColDef,
    summaryFundColDef, summaryTagColDef,
    tradeColDef,
    transactionTypeColDef
} from "../../utils/column-def";

export const TradesTemplate = html<Trades>`
  <!-- insert template code here -->
      <zero-layout>
          <zero-layout-region type="horizontal">
              <zero-layout-region type="vertical">
                  <zero-layout-region type="tabs">
                      <zero-layout-item title="Cash Balance By Fund Name">
                          <entity-management resourceName="ALL_CASH_BALANCE_BY_FUND_NAME"
                                             :columns="${() => [...summaryFundColDef]}"
                          ></entity-management>
                      </zero-layout-item>
                      <zero-layout-item title="Cash Balance By Tag">
                          <entity-management resourceName="ALL_CASH_BALANCE_BY_TAG"
                                             :columns="${() => [...summaryTagColDef]}"
                          ></entity-management>
                      </zero-layout-item>
                      <zero-layout-item title="Cash Balance By Deal">
                          <entity-management resourceName="ALL_CASH_BALANCE_BY_DEAL"
                                             :columns="${() =>[...summaryDealColDef]}"
                          ></entity-management>
                      </zero-layout-item>
                  </zero-layout-region>
                  <zero-layout-region type="tabs">
                      <zero-layout-item title="Trade By Custodian">
                          <entity-management resourceName="TRADE_BY_CUSTODIAN_ACCOUNT_DISPLAY_NAME"
                                             :columns="${() => [...custodianColDef]}"
                          >
                          </entity-management>
                      </zero-layout-item>
                      <zero-layout-item title="Trade By Transaction Type">
                          <entity-management resourceName="TRADE_BY_TRANSACTION_TYPE" :columns="${() => [...transactionTypeColDef]}"></entity-management>
                      </zero-layout-item>
                      <zero-layout-item title="Trade By Counterparty">
                          <entity-management resourceName="TRADE_BY_COUNTERPARTY" :columns="${() => [...counterPartyColDef]}"></entity-management>
                      </zero-layout-item>
                      <zero-layout-item title="Notional Quantity by Book">
                          <orders-chart></orders-chart>
                      </zero-layout-item>
                  </zero-layout-region>
              </zero-layout-region>
              <zero-layout-region type="tabs">
                  <zero-layout-item title="Cash Balance Summary">
                      <entity-management resourceName="ALL_CASH_BALANCE_SUMMARY"></entity-management>
                  </zero-layout-item>
                  <zero-layout-item title="Trades">
                      <entity-management resourceName="ALL_TRADES"
                                         createEvent="EVENT_TRADE_INSERT"
                                         updateEvent="EVENT_TRADE_UPDATE"
                                         deleteEvent="EVENT_TRADE_DELETE"
                                         :columns="${() => [...tradeColDef]}"

                      >
                      </entity-management>
                  </zero-layout-item>
              </zero-layout-region>
          </zero-layout-region>
      </zero-layout>
`;
