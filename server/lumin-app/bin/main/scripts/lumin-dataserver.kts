package scripts

/**
 *
 *   System              : lumin
 *   Sub-System          : lumin Configuration
 *   Version             : 1.0
 *   Copyright           : (c) GENESIS
 *   Date                : 2021-09-07
 *
 *   Function : Provide Data Server Configuration for lumin.
 *
 *   Modification History
 *
 */

dataServer {
    query("ALL_TRADES", TRADE)
    query("ALL_TRADES_AUDIT", TRADE_AUDIT)

    query("ALL_POSITIONS", POSITION){
        permissioning {
            auth (mapName = "ENTITY_VISIBILITY") {
                POSITION.FUND_NAME
            }
        }
    }
    query("POSITION_BY_FUND_NAME", POSITION_BY_FUND_NAME){
        permissioning {
            auth (mapName = "ENTITY_VISIBILITY") {
                POSITION_BY_FUND_NAME.FUND_NAME
            }
        }
    }
    query("POSITION_BY_F_NAME", POSITION_BY_F_NAME){
        permissioning {
            auth (mapName = "ENTITY_VISIBILITY") {
                POSITION_BY_F_NAME.FUND_NAME
            }
        }
    }

    query("POSITION_BY_STRATEGY", POSITION_BY_STRATEGY)
    query("POSITION_BY_DEAL", POSITION_BY_DEAL)
    query("POSITION_BY_TAG", POSITION_BY_TAG)
    query("ALL_POSITIONS_AUDIT", POSITION_AUDIT)
    query("TRADE_BY_CUSTODIAN_ACCOUNT_DISPLAY_NAME", TRADE_BY_CUSTODIAN_ACCOUNT_DISPLAY_NAME)
    query("TRADE_BY_TRANSACTION_TYPE", TRADE_BY_TRANSACTION_TYPE)
    query("TRADE_BY_COUNTERPARTY", TRADE_BY_COUNTERPARTY)
    query("ALL_CASH_BALANCE_SUMMARY", CASH_BALANCE_SUMMARY)
    query("ALL_CASH_BALANCE_BY_FUND_NAME", CASH_SUMMARY_BY_FUND_NAME)
    query("ALL_CASH_BALANCE_BY_TAG", CASH_SUMMARY_BY_TAG)
    query("ALL_CASH_BALANCE_BY_DEAL", CASH_SUMMARY_BY_DEAL)
    query("ALL_USER_ATTRIBUTES", USER_ATTRIBUTES)
    query("ALL_RIGHTS", RIGHT)
    query("ALL_PROFILE_RIGHTS", PROFILE_RIGHT_VIEW)
    query("ALL_AUM_SUMMARY", AUM_SUMMARY)
    query("ALL_LUMIN_OAS", LUMIN_OAS_VIEW)
    query("ALL_LUMIN_PAVO", LUMIN_PAVO_VIEW)
}
