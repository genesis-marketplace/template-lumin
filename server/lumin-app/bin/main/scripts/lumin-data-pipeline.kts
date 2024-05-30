package scripts

import global.genesis.db.rx.RxDb.Companion.getValue
import kotlinx.coroutines.flow.toList
import okhttp3.internal.toLongOrDefault
import org.joda.time.DateTime
import org.joda.time.format.DateTimeFormat


/**
 *
 *   System              : lumin
 *   Sub-System          : lumin Configuration
 *   Version             : 1.0
 *   Copyright           : (c) GENESIS
 *   Date                : 2021-09-07
 *
 *   Function : Provide Data Pipeline Configuration for lumin.
 *
 *   Modification History
 *
 */

pipelines {
    csvSource("lumin-trade-import"){
        location = "file:"+systemDefinition.getValue("UPLOAD_DIR")+"?fileName="+systemDefinition.getValue("UPLOAD_FILE")
        map("e2e-test", TRADE){

            fun convertNullOrBlank(value: String): String?{
                LOG.info("converting null of blank => $value")
                return value.takeIf { it.isNotBlank() }
            }

            fun convertDateTimeOrNull(value: String?): DateTime? {
                val formatter = DateTimeFormat.forPattern("M/d/yy h:mm:ss a z")
                return try {
                    DateTime.parse(value, formatter)
                } catch (e: Exception) {
                    null
                }
            }


            TRADE{
                TRADE_ID{transform { convertNullOrBlank(input.get(stringValue("TRADE_ID")))?.toLongOrDefault(0L) }}
                TRADE_CANCELED{transform { convertNullOrBlank(input.get(stringValue("TRADE_CANCELED")))?.lowercase()?.toBooleanStrictOrNull() }}
                FUND_NAME{transform { convertNullOrBlank(input.get(stringValue("FUND_NAME"))) }}
                CUSTODIAN_ACCT_DIS_NAME{transform { convertNullOrBlank(input.get(stringValue("CUSTODIAN_ACCT_DIS_NAME"))) }}
                BOOK_NAME{transform { convertNullOrBlank(input.get(stringValue("BOOK_NAME"))) }}
                TRADE_DESC{transform { convertNullOrBlank(input.get(stringValue("TRADE_DESC"))) }}
                BB_YELLOW_KEY{transform { convertNullOrBlank(input.get(stringValue("BB_YELLOW_KEY"))) }}
                TRADE_DATE{transform { convertNullOrBlank(input.get(stringValue("TRADE_DATE"))) }}
                SETTLE_DATE{transform { convertNullOrBlank(input.get(stringValue("SETTLE_DATE"))) }}
                TXN_TYPE{transform { convertNullOrBlank(input.get(stringValue("TXN_TYPE"))) }}
                NOTIONAL_QUANTITY{transform { convertNullOrBlank(input.get(stringValue("NOTIONAL_QUANTITY")))?.toLongOrDefault(0L) }}
                TRADE_PRICE{transform { convertNullOrBlank(input.get(stringValue("TRADE_PRICE")))?.toDoubleOrNull() }}
                NOTIONAL_NET_PROCEEDS{transform { convertNullOrBlank(input.get(stringValue("NOTIONAL_NET_PROCEEDS")))?.toDoubleOrNull() }}
                COUNTERPARTY{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY"))) }}
                EXTERNAL_REFERENCE{transform { convertNullOrBlank(input.get(stringValue("EXTERNAL_REFERENCE"))) }}
                GROSS_COMMISSION{transform { convertNullOrBlank(input.get(stringValue("GROSS_COMMISSION")))?.toDoubleOrNull() }}
                FEES{transform { convertNullOrBlank(input.get(stringValue("FEES")))?.toDoubleOrNull() }}
                COMMISSION_PER_SHARE{transform { convertNullOrBlank(input.get(stringValue("COMMISSION_PER_SHARE")))?.toDoubleOrNull() }}
                TRADE_MODIFY_DATE{transform { convertNullOrBlank(input.get(stringValue("TRADE_MODIFY_DATE"))) }}
                ABSOLUTE_TRADING_NOTIONAL_NET_PROCEEDS{transform { convertNullOrBlank(input.get(stringValue("ABSOLUTE_TRADING_NOTIONAL_NET_PROCEEDS")))?.toDoubleOrNull() }}
                END_BROKER_COMMISSIONS{transform { convertNullOrBlank(input.get(stringValue("END_BROKER_COMMISSIONS")))?.toDoubleOrNull() }}
                FCM_CLEARING_MARKUP{transform { convertNullOrBlank(input.get(stringValue("FCM_CLEARING_MARKUP")))?.toDoubleOrNull() }}
                FEES_AND_COMMISSIONS{transform { convertNullOrBlank(input.get(stringValue("FEES_AND_COMMISSIONS")))?.toDoubleOrNull() }}
                GROSS_COMMISSIONS{transform { convertNullOrBlank(input.get(stringValue("GROSS_COMMISSIONS")))?.toDoubleOrNull() }}
                GROSS_FEES{transform { convertNullOrBlank(input.get(stringValue("GROSS_FEES")))?.toDoubleOrNull() }}
                GROSS_TAXES{transform { convertNullOrBlank(input.get(stringValue("GROSS_TAXES")))?.toDoubleOrNull() }}
                IMPLIED_COMMISSIONS{transform { convertNullOrBlank(input.get(stringValue("IMPLIED_COMMISSIONS")))?.toDoubleOrNull() }}
                IMPLIED_FEES{transform { convertNullOrBlank(input.get(stringValue("IMPLIED_FEES")))?.toDoubleOrNull() }}
                IMPLIED_TAXES{transform { convertNullOrBlank(input.get(stringValue("IMPLIED_TAXES")))?.toDoubleOrNull() }}
                INITIAL_MARGIN{transform { convertNullOrBlank(input.get(stringValue("INITIAL_MARGIN")))?.toDoubleOrNull() }}
                NSA_FEE{transform { convertNullOrBlank(input.get(stringValue("NSA_FEE")))?.toDoubleOrNull() }}
                NET_COMMISSIONS{transform { convertNullOrBlank(input.get(stringValue("NET_COMMISSIONS")))?.toDoubleOrNull() }}
                NET_GST{transform { convertNullOrBlank(input.get(stringValue("NET_GST")))?.toDoubleOrNull() }}
                NET_TRADE_PRICE{transform { convertNullOrBlank(input.get(stringValue("NET_TRADE_PRICE")))?.toDoubleOrNull() }}
                PIT_FEES{transform { convertNullOrBlank(input.get(stringValue("PIT_FEES")))?.toDoubleOrNull() }}
                TRADE_EXCHANGE_FEES{transform { convertNullOrBlank(input.get(stringValue("TRADE_EXCHANGE_FEES")))?.toDoubleOrNull() }}
                TRADE_PRICE{transform { convertNullOrBlank(input.get(stringValue("TRADE_PRICE")))?.toDoubleOrNull() }}
                TRADING_NET_PROCEEDS{transform { convertNullOrBlank(input.get(stringValue("TRADING_NET_PROCEEDS")))?.toDoubleOrNull() }}
                TRADING_NOTIONAL_NET_PROCEEDS{transform { convertNullOrBlank(input.get(stringValue("TRADING_NOTIONAL_NET_PROCEEDS")))?.toDoubleOrNull() }}
                TRANSFER_ACCRUED_DIVIDENDS{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_ACCRUED_DIVIDENDS")))?.toDoubleOrNull() }}
                TRANSFER_ACCRUED_DIVIDENDS_WITHHOLDING_TAX{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_ACCRUED_DIVIDENDS_WITHHOLDING_TAX")))?.toDoubleOrNull() }}
                TRANSFER_ACCRUED_INTEREST{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_ACCRUED_INTEREST")))?.toDoubleOrNull() }}
                TRANSFER_FX_REALIZED{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_FX_REALIZED")))?.toDoubleOrNull() }}
                TRANSFER_FEES_AND_COMMISSIONS{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_FEES_AND_COMMISSIONS")))?.toDoubleOrNull() }}
                TRANSFER_FINANCING_ACCRUED_INTEREST{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_FINANCING_ACCRUED_INTEREST")))?.toDoubleOrNull() }}
                TRANSFER_FINANCING_INTEREST{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_FINANCING_INTEREST")))?.toDoubleOrNull()  }}
                TRANSFER_INTEREST{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_INTEREST")))?.toDoubleOrNull() }}
                TRANSFER_PAID_DIVIDENDS{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_PAID_DIVIDENDS")))?.toDoubleOrNull() }}
                TRANSFER_PAID_DIVIDENDS_WITHHOLDING_TAX{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_PAID_DIVIDENDS_WITHHOLDING_TAX")))?.toDoubleOrNull() }}
                TRANSFER_TRADING_REALIZED{transform { convertNullOrBlank(input.get(stringValue("TRANSFER_TRADING_REALIZED")))?.toDoubleOrNull() }}
                ACCRUED_INTEREST{transform { convertNullOrBlank(input.get(stringValue("ACCRUED_INTEREST")))?.toDoubleOrNull() }}
                ACCRUED_INTEREST_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("ACCRUED_INTEREST_OVERRIDE")))?.toDoubleOrNull() }}
                ACCRUED_INTEREST_WH_TAX{transform { convertNullOrBlank(input.get(stringValue("ACCRUED_INTEREST_WH_TAX")))?.toDoubleOrNull() }}
                ACCRUED_SETTLE_TO_BASE_CCY_FX_RATE{transform { convertNullOrBlank(input.get(stringValue("ACCRUED_SETTLE_TO_BASE_CCY_FX_RATE")))?.toDoubleOrNull() }}
                ACCRUED_TRADE_TO_BASE_CCY_FX_RATE{transform { convertNullOrBlank(input.get(stringValue("ACCRUED_TRADE_TO_BASE_CCY_FX_RATE")))?.toDoubleOrNull() }}
                ACCRUED_TRADE_TO_SETTLE_CCY_FX_RATE{transform { convertNullOrBlank(input.get(stringValue("ACCRUED_TRADE_TO_SETTLE_CCY_FX_RATE")))?.toDoubleOrNull() }}
                ADJUSTED_PARENT_TRADE_ID{transform { convertNullOrBlank(input.get(stringValue("ADJUSTED_PARENT_TRADE_ID")))?.toLongOrDefault(0L) }}
                BORROW_AGREEMENT_CURRENCY{transform { convertNullOrBlank(input.get(stringValue("BORROW_AGREEMENT_CURRENCY"))) }}
                BORROW_AGREEMENT_DESCRIPTION{transform { convertNullOrBlank(input.get(stringValue("BORROW_AGREEMENT_DESCRIPTION"))) }}
                BORROW_AGREEMENT_ID{transform { convertNullOrBlank(input.get(stringValue("BORROW_AGREEMENT_ID")))?.toIntOrNull() }}
                ALLOCATED_TRADES_ACCOUNT_ID{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_ACCOUNT_ID")))?.toIntOrNull() }}
                ALLOCATED_TRADES_ACCOUNTS{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_ACCOUNTS"))) }}
                ALLOCATED_TRADES_BOOK_ID{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_BOOK_ID"))) }}
                ALLOCATED_TRADES_BOOK{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_BOOK"))) }}
                ALLOCATED_TRADES_CUSTODIAN{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_CUSTODIAN"))) }}
                ALLOCATED_TRADES_CUSTODIAN_ID{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_CUSTODIAN_ID"))) }}
                ALLOCATED_TRADES_CUSTODIAN_SHORT_NAME{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_CUSTODIAN_SHORT_NAME"))) }}
                ALLOCATED_TRADES_FUND_ID{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_FUND_ID"))) }}
                ALLOCATED_TRADES_SET_OF_CUSTODIAN_ID{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_SET_OF_CUSTODIAN_ID"))) }}
                ALLOCATED_TRADES_SET_OF_CUSTODIAN{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES_SET_OF_CUSTODIAN"))) }}
                ALLOCATION_INSTRUCTIONS{transform { convertNullOrBlank(input.get(stringValue("ALLOCATION_INSTRUCTIONS"))) }}
                ALLOCATION_OPTIMIZATION{transform { convertNullOrBlank(input.get(stringValue("ALLOCATION_OPTIMIZATION"))) }}
                AMENDED_TRADE{transform { convertNullOrBlank(input.get(stringValue("AMENDED_TRADE")))?.lowercase()?.toBooleanStrictOrNull() }}
                ALLOCATED_TRADE{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADE")))?.lowercase()?.toBooleanStrictOrNull() }}
                ALLOCATED_TRADES{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADES"))) }}
                ARCHIVE_DATE{transform { convertNullOrBlank(input.get(stringValue("ARCHIVE_DATE"))) }}
                ALLOCATED_TRADE_COUNT{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADE_COUNT")))?.toIntOrNull() }}
                ALLOCATED_TRADE_ALL_HAVE_FINANCING{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADE_ALL_HAVE_FINANCING")))?.lowercase()?.toBooleanStrictOrNull() }}
                ALLOCATED_TRADE_ALL_HAVE_BORROW{transform { convertNullOrBlank(input.get(stringValue("ALLOCATED_TRADE_ALL_HAVE_BORROW")))?.lowercase()?.toBooleanStrictOrNull() }}
                ADJUSTED_PRICE{transform { convertNullOrBlank(input.get(stringValue("ADJUSTED_PRICE")))?.toDoubleOrNull() }}
                ADJUSTED_ACTIVITY{transform { convertNullOrBlank(input.get(stringValue("ADJUSTED_ACTIVITY")))?.toIntOrNull() }}
                BULK_OR_ALLOCATED{transform { convertNullOrBlank(input.get(stringValue("BULK_OR_ALLOCATED"))) }}
                CLEARING_COMMISSION_RATE{transform { convertNullOrBlank(input.get(stringValue("CLEARING_COMMISSION_RATE")))?.toDoubleOrNull() }}
                CLEARING_COMMISSION_TYPE{transform { convertNullOrBlank(input.get(stringValue("CLEARING_COMMISSION_TYPE"))) }}
                COMMISSION_RATE{transform { convertNullOrBlank(input.get(stringValue("COMMISSION_RATE")))?.toDoubleOrNull() }}
                COMMISSION_TYPE{transform { convertNullOrBlank(input.get(stringValue("COMMISSION_TYPE"))) }}
                COMMISSION_AUTO_CALC{transform { convertNullOrBlank(input.get(stringValue("COMMISSION_AUTO_CALC"))) }}
                COMMISSIONS{transform { convertNullOrBlank(input.get(stringValue("COMMISSIONS")))?.toDoubleOrNull() }}
                COUNTERPARTY_ACCOUNT_NAME{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_ACCOUNT_NAME"))) }}
                COUNTERPARTY_ACCOUNT_NUMBER{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_ACCOUNT_NUMBER"))) }}
                COUNTERPARTY_AGENT_BIC_CODE{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_AGENT_BIC_CODE"))) }}
                COUNTERPARTY_AGENT_DSS_CODE{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_AGENT_DSS_CODE"))) }}
                COUNTERPARTY_AGENT_NAME{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_AGENT_NAME"))) }}
                COUNTERPARTY_AGENT_SETTLEMENT_COUNTRY{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_AGENT_SETTLEMENT_COUNTRY"))) }}
                COUNTERPARTY_BIC_CODE{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_BIC_CODE"))) }}
                COUNTERPARTY_COMMISSION_MAX_LIMIT{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_COMMISSION_MAX_LIMIT")))?.toDoubleOrNull() }}
                COUNTERPARTY_COMMISSION_MIN_LIMIT{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_COMMISSION_MIN_LIMIT")))?.toDoubleOrNull() }}
                COUNTERPARTY_CONTACT_NAME{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_CONTACT_NAME"))) }}
                COUNTERPARTY_CONTACT_ID{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_CONTACT_ID"))) }}
                COUNTERPARTY_CONTACT_NAMES{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_CONTACT_NAMES"))) }}
                COUNTERPARTY_COUNTRY_CODE{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_COUNTRY_CODE"))) }}
                COUNTERPARTY_COUNTRY_NAME{transform { convertNullOrBlank(input.get(stringValue("COUNTERPARTY_COUNTRY_NAME"))) }}
                EXECUTION_BROKER_SHORT_NAME{transform { convertNullOrBlank(input.get(stringValue("EXECUTION_BROKER_SHORT_NAME"))) }}
                EXECUTION_COMMISSION{transform { convertNullOrBlank(input.get(stringValue("EXECUTION_COMMISSION")))?.toDoubleOrNull() }}
                EXECUTION_COMMISSION_RATE{transform { convertNullOrBlank(input.get(stringValue("EXECUTION_COMMISSION_RATE")))?.toDoubleOrNull() }}
                EXECUTION_COMMISSION_TYPE{transform { convertNullOrBlank(input.get(stringValue("EXECUTION_COMMISSION_TYPE"))) }}
                EXERCISE_RATE{transform { convertNullOrBlank(input.get(stringValue("EXERCISE_RATE")))?.toDoubleOrNull() }}
                FAR_FIXING_DATE{transform { convertNullOrBlank(input.get(stringValue("FAR_FIXING_DATE"))) }}
                FAR_FIXING_RATE{transform { convertNullOrBlank(input.get(stringValue("FAR_FIXING_RATE")))?.toDoubleOrNull() }}
                FAR_FX_RATE{transform { convertNullOrBlank(input.get(stringValue("FAR_FX_RATE")))?.toDoubleOrNull() }}
                FAR_COUNTER_CURRENCY{transform { convertNullOrBlank(input.get(stringValue("FAR_COUNTER_CURRENCY")))?.toDoubleOrNull() }}
                FAR_BASE_QUANTITY{transform { convertNullOrBlank(input.get(stringValue("FAR_BASE_QUANTITY")))?.toDoubleOrNull() }}
                UP_FRONT_FEE{transform { convertNullOrBlank(input.get(stringValue("UP_FRONT_FEE")))?.toDoubleOrNull() }}
                FAIR_MARKET_VALUE{transform { convertNullOrBlank(input.get(stringValue("FAIR_MARKET_VALUE")))?.toDoubleOrNull() }}
                TRADING_NOTIONAL_PROCEEDS{transform { convertNullOrBlank(input.get(stringValue("TRADING_NOTIONAL_PROCEEDS")))?.toDoubleOrNull() }}
                TRADER{transform { convertNullOrBlank(input.get(stringValue("TRADER"))) }}
                TRADE_TRS_START_DATE_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_START_DATE_OVERRIDE"))) }}
                TRADE_TRS_SPREAD_DATE_OVERRIDE_EFFECTIVE_RATE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_SPREAD_DATE_OVERRIDE_EFFECTIVE_RATE")))?.toDoubleOrNull() }}
                TRADE_TRS_SPREAD_DATE_OVERRIDE_EFFECTIVE_DATE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_SPREAD_DATE_OVERRIDE_EFFECTIVE_DATE"))) }}
                TRADE_TRS_PAYMENT_RESET_RATE_METHOD_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_PAYMENT_RESET_RATE_METHOD_OVERRIDE"))) }}
                TRADE_TRS_PAYMENT_RESET_FREQUENCY_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_PAYMENT_RESET_FREQUENCY_OVERRIDE"))) }}
                TRADE_TRS_PAYMENT_LEG_PAYMENT_FREQUENCY_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_PAYMENT_LEG_PAYMENT_FREQUENCY_OVERRIDE"))) }}
                TRADE_TRS_PAYMENT_ACCRUAL_METHOD_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_PAYMENT_ACCRUAL_METHOD_OVERRIDE"))) }}
                TRADE_TRS_FLOATING_RATE_LOOKBACK_DAYS_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_FLOATING_RATE_LOOKBACK_DAYS_OVERRIDE"))) }}
                TRADE_TRS_FLOATING_RATE_INDEX_ID_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_FLOATING_RATE_INDEX_ID_OVERRIDE"))) }}
                TRADE_TRS_END_DATE_OVERRIDE{transform { convertNullOrBlank(input.get(stringValue("TRADE_TRS_END_DATE_OVERRIDE"))) }}
                TRADE_FEE{transform { convertNullOrBlank(input.get(stringValue("TRADE_FEE")))?.toDoubleOrNull() }}
                TRADE_CURRENCY{transform { convertNullOrBlank(input.get(stringValue("TRADE_CURRENCY"))) }}
                TRADE_CREATE_DATE{transform { convertNullOrBlank(input.get(stringValue("TRADE_CREATE_DATE"))) }}
                TAXES{transform { convertNullOrBlank(input.get(stringValue("TAXES"))) }}
                TRANSACTION_TYPE_SHORT{transform { convertNullOrBlank(input.get(stringValue("TRANSACTION_TYPE_SHORT"))) }}
                TRANSACTION_TYPE{transform { convertNullOrBlank(input.get(stringValue("TRANSACTION_TYPE"))) }}
                TRADING_PROCEEDS{transform { convertNullOrBlank(input.get(stringValue("TRADING_PROCEEDS")))?.toDoubleOrNull() }}
                TRADING_TYPE{transform { convertNullOrBlank(input.get(stringValue("TRADING_TYPE"))) }}
                TRADING_TIME{transform {convertDateTimeOrNull(convertNullOrBlank(input.get(stringValue("TRADING_TIME"))))}}
                TRS_RETURN_LEG_FIRST_RESET_DATE_AFTER_TRADE_DATE{transform { convertNullOrBlank(input.get(stringValue("TRS_RETURN_LEG_FIRST_RESET_DATE_AFTER_TRADE_DATE"))) }}
                TRS_PAY_LEG_FIRST_RESET_DATE_AFTER_TRADE_DATE{transform { convertNullOrBlank(input.get(stringValue("TRS_PAY_LEG_FIRST_RESET_DATE_AFTER_TRADE_DATE"))) }}
                TRS_PAY_LEG_FIRST_PAYMENT_DATE_AFTER_TRADE_DATE{transform { convertNullOrBlank(input.get(stringValue("TRS_PAY_LEG_FIRST_PAYMENT_DATE_AFTER_TRADE_DATE"))) }}
                TRS_MATURITY_DATE_FOR_TRADE{transform { convertNullOrBlank(input.get(stringValue("TRS_MATURITY_DATE_FOR_TRADE"))) }}
                TRS_CURRENT_RESET_SPREAD{transform { convertNullOrBlank(input.get(stringValue("TRS_CURRENT_RESET_SPREAD")))?.toDoubleOrNull() }}
                T_3_BUSINESS_DAYS{transform { convertNullOrBlank(input.get(stringValue("T_3_BUSINESS_DAYS"))) }}
                SOFT_DOLLAR_COMMISSION {transform { convertNullOrBlank(input.get(stringValue("SOFT_DOLLAR_COMMISSION")))?.toDoubleOrNull() } }
                SIZE{transform { convertNullOrBlank(input.get(stringValue("SIZE")))?.toDoubleOrNull() }}
                SINKING_FACTOR_AS_OF_SETTLE_DATE{transform { convertNullOrBlank(input.get(stringValue("SINKING_FACTOR_AS_OF_SETTLE_DATE")))?.toDoubleOrNull() }}
                SETTLEMENT_DAYS{transform { convertNullOrBlank(input.get(stringValue("SETTLEMENT_DAYS")))?.toIntOrNull() }}
                SEC_FEES{ transform { convertNullOrBlank(input.get(stringValue("SEC_FEES")))?.toDoubleOrNull() }}
                TRADE_SETTLEMENT_DAYS{transform { convertNullOrBlank(input.get(stringValue("TRADE_SETTLEMENT_DAYS")))?.toIntOrNull() }}
                TRS_LAST_CASH_DIVIDEND_TAX_RATE{transform { convertNullOrBlank(input.get(stringValue("TRS_LAST_CASH_DIVIDEND_TAX_RATE")))?.toDoubleOrNull() }}
                TRS_LAST_CASH_DIVIDEND_TYPE{transform { convertNullOrBlank(input.get(stringValue("TRS_LAST_CASH_DIVIDEND_TYPE"))) }}
                TRS_LAST_FX_RATE{transform { convertNullOrBlank(input.get(stringValue("TRS_LAST_FX_RATE")))?.toDoubleOrNull() }}
                TRS_LAST_FX_RATE_EFFECTIVE_DATE{transform { convertNullOrBlank(input.get(stringValue("TRS_LAST_FX_RATE_EFFECTIVE_DATE"))) }}
                TRS_LAST_FX_RATE_TERMINATION_DATE{transform { convertNullOrBlank(input.get(stringValue("TRS_LAST_FX_RATE_TERMINATION_DATE"))) }}
                TRS_LONG_SHORT{transform { convertNullOrBlank(input.get(stringValue("TRS_LONG_SHORT"))) }}
                TRS_MERGE_TRS_AND_SECURITY_MASTER_CASH_DIVIDENDS{transform { convertNullOrBlank(input.get(stringValue("TRS_MERGE_TRS_AND_SECURITY_MASTER_CASH_DIVIDENDS")))?.toDoubleOrNull() }}
                TRS_NOTIONAL_CURRENCY{transform { convertNullOrBlank(input.get(stringValue("TRS_NOTIONAL_CURRENCY"))) }}
                TRS_NOTIONAL_CURRENCY_ID{transform { convertNullOrBlank(input.get(stringValue("TRS_NOTIONAL_CURRENCY_ID"))) }}
                TRS_NOTIONAL_CURRENCY_TYPE{transform { convertNullOrBlank(input.get(stringValue("TRS_NOTIONAL_CURRENCY_TYPE"))) }}
            }
            onCompletion {
                LOG.info("Successful Rows ==> ${result.successfulRows}")
                LOG.info("Failed Rows ==> ${result.successfulRows}")
                LOG.info("Existing Records ==> ${entityDb.getBulk(TRADE).toList().size}")
                LOG.info("Imported File Name => ${context.fileName}")
            }
        }
    }

}
