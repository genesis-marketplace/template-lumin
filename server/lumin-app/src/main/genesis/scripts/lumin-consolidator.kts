package scripts



/**
 *
 *   System              : lumin
 *   Sub-System          : lumin Configuration
 *   Version             : 1.0
 *   Copyright           : (c) GENESIS
 *   Date                : 2021-09-07
 *
 *   Function : Provide Consolidator Configuration for lumin.
 *
 *   Modification History
 *
 */

consolidators {
    consolidator(POSITION,POSITION_BY_FUND_NAME){
        select {
            POSITION_BY_FUND_NAME{
                sum { dailyRealizedPnl } into SDRPNL
                sum { dailyPnl } into SDPNL
                sum { mtdPnl } into SMTDPNL
                sum { ytdPnl } into SYTDPNL
                sum { pnl } into SPNL
                count() into P_COUNT
            }
        }
        groupBy { PositionByFundName.ByFundName(fundName)}
    }

    consolidator(POSITION, POSITION_BY_STRATEGY){
        select {
            POSITION_BY_STRATEGY{
                sum { dailyRealizedPnl } into SDRPNL
                sum { dailyPnl } into SDPNL
                sum { mtdPnl } into SMTDPNL
                sum { ytdPnl } into SYTDPNL
                sum { pnl } into SPNL
                count() into P_COUNT
            }
        }
        groupBy { PositionByStrategy.byStrategy(strategy) }
    }

    consolidator(POSITION, POSITION_BY_F_NAME){
        select {
            POSITION_BY_F_NAME{
                sum { deltaAdjLmv } into S_DELTA_ADJ_LMV
                sum { deltaAdjNmv } into S_DELTA_ADJ_NMV
                sum { deltaAdjSmv } into S_DELTA_ADJ_SMV
                sum { betaAdjNet } into S_BETA_ADJ_NET
                sum { gamma } into S_GAMMA
                sum { vega } into S_VEGGA
                sum { theta } into S_THETA
            }
        }
        groupBy { PositionByFName.byFundName(fundName) }
    }

    consolidator(POSITION, POSITION_BY_DEAL){
        select {
            POSITION_BY_DEAL{
                sum { deltaAdjLmv } into S_DELTA_ADJ_LMV
                sum { deltaAdjNmv } into S_DELTA_ADJ_NMV
                sum { deltaAdjSmv } into S_DELTA_ADJ_SMV
                sum { betaAdjNet } into S_BETA_ADJ_NET
                sum { gamma } into S_GAMMA
                sum { vega } into S_VEGGA
                sum { theta } into S_THETA
            }
        }
        groupBy { PositionByDeal.byDeal(deal) }
    }

    consolidator(POSITION, POSITION_BY_TAG){
        select {
            POSITION_BY_TAG{
                sum { deltaAdjLmv } into S_DELTA_ADJ_LMV
                sum { deltaAdjNmv } into S_DELTA_ADJ_NMV
                sum { deltaAdjSmv } into S_DELTA_ADJ_SMV
                sum { betaAdjNet } into S_BETA_ADJ_NET
                sum { gamma } into S_GAMMA
                sum { vega } into S_VEGGA
                sum { theta } into S_THETA
            }
        }
        groupBy { PositionByTag.byTag(tag) }
    }

    consolidator(TRADE, TRADE_BY_CUSTODIAN_ACCOUNT_DISPLAY_NAME){
        select {
            TRADE_BY_CUSTODIAN_ACCOUNT_DISPLAY_NAME{
                sum {
                    fairMarketValue?:0.0} into SFMV
                sum {
                    notionalNetProceeds?:0.0} into SNOTNETPRO
                avg {
                    tradePrice?:0.0 } into ATPRICE
            }
        }
        groupBy { TradeByCustodianAccountDisplayName.byCustodianAcctDisName(custodianAcctDisName) } into {
            indexScan { Trade.byCustodianAcctDisName(groupId.custodianAcctDisName) }
        }
    }

    consolidator(TRADE, TRADE_BY_TRANSACTION_TYPE){
        select {
            TRADE_BY_TRANSACTION_TYPE{
                stdev {
                    adjustedPrice?:0.0 } into SDADJPRICE
                avg {
                    fairMarketValue?:0.0 } into AFMV
                avg {
                    tradePrice?:0.0 } into ATPRICE
            }
        }
        groupBy { TradeByTransactionType.byTransactionType(transactionType) } into {
            indexScan { Trade.byTransactionType(groupId.transactionType) }
        }
    }

    consolidator(TRADE, TRADE_BY_COUNTERPARTY){
        select {
            TRADE_BY_COUNTERPARTY{
                sum {
                    notionalNetProceeds?:0.0 } into SNOTNETPRO
                sum {
                    fairMarketValue?:0.0 } into SFMV
                avg {
                    fairMarketValue?:0.0 } into AFMV
            }
        }
        groupBy { TradeByCounterparty.byCounterparty(counterparty) } into {
            indexScan { Trade.byCounterparty(groupId.counterparty) }
        }
    }

    consolidator(CASH_BALANCE_SUMMARY, CASH_SUMMARY_BY_FUND_NAME){
        select {
            CASH_SUMMARY_BY_FUND_NAME{
                sum { dailyPnl } into SDPNL
                sum { mtdPnl } into SMTDPNL
                sum { ytdPnl } into SYTDPNL
                sum { itdPnl } into SITDPNL
             }
        }
        groupBy { CashSummaryByFundName.byFundName(fundName) }
    }

    consolidator(CASH_BALANCE_SUMMARY, CASH_SUMMARY_BY_TAG){
        select {
            CASH_SUMMARY_BY_TAG{
                sum { dailyPnl } into SDPNL
                sum { mtdPnl } into SMTDPNL
                sum { ytdPnl } into SYTDPNL
                sum { itdPnl } into SITDPNL
            }
        }
        groupBy { CashSummaryByTag.byTag(tag) }
    }

    consolidator(CASH_BALANCE_SUMMARY, CASH_SUMMARY_BY_DEAL){
        select {
            CASH_SUMMARY_BY_DEAL{
                sum { dailyPnl } into SDPNL
                sum { mtdPnl } into SMTDPNL
                sum { ytdPnl } into SYTDPNL
                sum { itdPnl } into SITDPNL
            }
        }
        groupBy { CashSummaryByDeal.byDeal(deal) }
    }

    consolidator(CASH_BALANCE_SUMMARY, LUMIN_OAS_CS){
        select {
            LUMIN_OAS_CS{
                sum { dailyPnl } into SDPNL
                sum { mtdPnl } into SMTDPNL
                sum {ytdPnl } into SYTDPNL
                sum { itdPnl } into SITDPNL
            }
        }
        where {
            ( fundName == "Alternative Fund Opportunistic Alternative Solutions Holdings I Fund LP" ||
              fundName == "Alternative Fund Opportunistic Alternative Solutions Holdings II Fund LP") &&
                    (tag == "IPO" || tag == "Follow-On" || tag == "Block" || tag == "tactical Trades" || tag == "Financing")
        }
        groupBy { LuminOasCs.byDeal(deal) }
    }

    consolidator(POSITION, LUMIN_OAS_POS){
        select {
            LUMIN_OAS_POS{
                sum { deltaAdjLmv } into S_DELTA_ADJ_LMV
                sum { deltaAdjSmv } into S_DELTA_ADJ_SMV
                sum { deltaAdjLmv - deltaAdjSmv } into GROSS
            }
        }
        where {
            ( fundName == "Alternative Fund Opportunistic Alternative Solutions Holdings I Fund LP" ||
                    fundName == "Alternative Fund Opportunistic Alternative Solutions Holdings II Fund LP") &&
                    (tag == "IPO" || tag == "Follow-On" || tag == "Block" || tag == "tactical Trades" || tag == "Financing")
        }
        groupBy { LuminOasPos.byDeal(deal) }
    }


    consolidator(CASH_BALANCE_SUMMARY, LUMIN_PAVO_CS){
        select {
            LUMIN_PAVO_CS{
                sum { dailyPnl } into SDPNL
                sum { mtdPnl } into SMTDPNL
                sum {ytdPnl } into SYTDPNL
                sum { itdPnl } into SITDPNL
            }
        }
        where {
            ( fundName == "Alternative Fund Pavo Holdings I LP" ||
                    fundName == "Alternative Fund Pavo Holdings II LP") &&
                    (tag == "IPO" || tag == "Follow-On" || tag == "Block" || tag == "tactical Trades" || tag == "Financing")
        }
        groupBy { LuminPavoCs.byDeal(deal) }
    }

    consolidator(POSITION, LUMIN_PAVO_POS){
        select {
            LUMIN_PAVO_POS{
                sum { deltaAdjLmv } into S_DELTA_ADJ_LMV
                sum { deltaAdjSmv } into S_DELTA_ADJ_SMV
                sum { deltaAdjLmv - deltaAdjSmv } into GROSS
            }
        }
        where {
            ( fundName == "Alternative Fund Pavo Holdings I LP" ||
                    fundName == "Alternative Fund Pavo Holdings II LP") &&
                    (tag == "IPO" || tag == "Follow-On" || tag == "Block" || tag == "tactical Trades" || tag == "Financing")
        }
        groupBy { LuminPavoPos.byDeal(deal) }
    }

}
