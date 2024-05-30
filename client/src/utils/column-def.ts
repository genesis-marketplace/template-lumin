import {cellStyle, currencyFormatter, percentFormatter} from "./formatters";

export const positionFields = [
    'DEAL','TAG','POSITION_SC_DATE_ADJUSTED','FUND_NAME','STRATEGY','SUB_STRATEGY', 'BOOK_NAME','BB_YELLOW_KEY', 'DAILY_PNL', 'MTD_PNL', 'YTD_PNL', 'PNL',
    'POSITION_DESC','TICKER', 'SEDOL', 'RIC',  'ISIN', 'NOTIONAL_QUANTITY', 'POSITION_AGE', 'MARKET_PRICE',
    'AVERAGE_COST',  'DELTA_ADJ_LMV', 'DELTA_ADJ_SMV', 'DELTA_ADJ_NMV',
    'BETA_ADJ_NET', 'GAMMA', 'VEGA', 'THETA', 'CUSTODIAN_ACCT_NUMBER', 'CUSTODIAN_ACCT_DIS_NAME', 'ACCRUAL_FEES',
    'ACCRUED_DIVIDENDS', 'ACCRUED_DIVIDENDS_FEES', 'ACCRUED_INTEREST', 'ACCRUED_INTEREST_PBD',
    'ACCRUED_INTEREST_PROCEEDS', 'ACCRUED_RECEIVABLE', 'DIRTY_LMV', 'DIRTY_SMV', 'DV01_SECONDARY_CCY',
    'DAILY_ACCRUED_INTEREST', 'DAILY_ACCRUED_DIVIDENDS_WITHHOLDING_TAX', 'DAILY_ACCRUED_PAID_INTEREST',
    'DAILY_FINANCING', 'DAILY_PNL_GL_NAV', 'DAILY_PNL_GL_NAV_FOR_BOOK', 'DAILY_PNL_HIERARCHICAL_NAV', 'DAILY_PNL_LE_NAV',
    'DAILY_PNL_SOM_NAV', 'DAILY_FINANCING_ACCRUED_INTEREST', 'DAILY_FINANCING_INTEREST', 'DAILY_FEES', 'DAILY_REALIZED_PNL',
    'DAILY_REALIZED_TRADING_PNL', 'DAILY_REBATE', 'DAILY_REALIZED_ACCRUED_INTEREST', 'DAILY_PRINCIPAL_AMOUNT',
    'DAILY_PAID_INTEREST', 'DAILY_PAID_DIVIDENDS_WITHHOLDING_TAX', 'GL_GAV', 'GL_GAV_START_OF_DAY', 'GL_GAV_START_OF_MONTH',
    'GL_GAV_START_OF_QUARTER', 'GL_GAV_START_OF_SEMI_ANNUAL', 'GL_GAV_START_OF_WEEK', 'GL_GAV_START_OF_YEAR',
    'MTD_FINANCING', 'MTD_DIVIDENDS', 'DAILY_COMMISSIONS', 'DAILY_IMPLIED_FEES', 'DAILY_ST_TRADING_REALIZED',
    'DAILY_PNL_CHANGE', 'DAILY_OTHER_FIN_INT', 'DAILY_OTHER_FINANCING', 'DAILY_NET_INTEREST', 'DAILY_TRADING_PNL',
    'DAILY_TRADING_ACCRUED_INTEREST', 'DAILY_TAXES', 'DAILY_TRADING_PNL_COST_FX', 'DAILY_TRADING_SETTLEMENT_INTEREST',
    'DAILY_UNDERLYING_CONTRIBUTION', 'DAILY_UNDERLYING_FX_REALIZED_CONTRIBUTION', 'DAILY_UNSETTLED_FINANCING_INTEREST',
    'DAILY_UNREALIZED_FEES_AND_COMMISSIONS', 'DAILY_UNREALIZED_FEES_AND_COMMISSIONS', 'DAILY_DIVIDENDS',
    'DAILY_FX_CONTRIBUTION', 'DAILY_FX_CONTRIBUTION_AT_COST_FX', 'DAILY_FX_REALIZED_CONTRIBUTION',
    'DAILY_FX_SETTLED_CASH', 'DAILY_FIN_REST_REALIZED_TRADING_PNL', 'DAILY_IMPLIED_COMMISSIONS', 'FINANCING_INTEREST',
    'MTD_ACCRUED_COST_OF_CARRY', 'MTD_ACCRUED_DELAYED_COMPENSATION', 'MTD_ACCRUED_DIVIDEND',
    'MTD_ACCRUED_DIVIDENDS_WITHHOLDING_FX_UNREALIZED', 'MTD_ACCRUED_DIVIDENDS_WITHHOLDING_TAX',
    'MTD_ACCRUED_DIVIDENDS_WITHHOLDING_TAX_NET_OF_FX', 'MTD_ACCRUED_DIVIDENDS', 'MTD_ACCRUED_INTEREST',
    'MTD_CARRY_CASH_FLOWS', 'MTD_COMMISSIONS', 'MTD_DIVIDEND_FX_UNREALIZED', 'MTD_DIVIDEND_FEE_FX_REALIZED',
    'MTD_DIVIDEND_FEE_FX_UNREALIZED', 'MTD_DIVIDEND_WITHHOLDING_TAX', 'MTD_FX_CONTRIBUTION_AT_COST_FX',
    'MTD_FX_CONTRIBUTION', 'MTD_FX_REALIZED_CONTRIBUTION', 'MTD_FX_SETTLED_CASH', 'MTD_FEES', 'MTD_FIN_CFD_ONLY',
    'MTD_FIN_NON_NULL', 'MTD_FIN_ACCRUED_INTEREST', 'MTD_FIN_RESET_NET_PAYMENT', 'MTD_FINANCING_INTEREST',
    'MTD_FINANCING_RESET_REALIZED_TRADING_PNL', 'MTD_FINANCING_AND_INTEREST', 'MTD_GROSS_TRADING',
    'MTD_GROSS_TRADING_AND_FX_CONTRIBUTION', 'MTD_IMPLIED_COMMISSIONS', 'MTD_IMPLIED_FEES',
    'MTD_LT_TRADING_REALIZED', 'MTD_OTHER_FINANCING', 'MTD_NET_INTEREST', 'MTD_OTHER_FIN_ACCRUED_INTEREST',
    'MTD_OTHER_FIN_INTEREST', 'MTD_OTHER_PNL', 'MTD_PNL_CHANGE', 'MTD_PNL_LESS_FX_CONTRIBUTION',
    'MTD_PAID_COST_OF_CARRY', 'MTD_PAID_DELAYED_COMPENSATION', 'MTD_PAID_DIVIDEND_FX_REALIZED',
    'MTD_REALIZED_TAXES', 'MTD_REALIZED_TRADING_PNL', 'MTD_REALIZED_TRADING_PL', 'MTD_PRINCIPAL_AMOUNT',
    'MTD_PAID_DIVIDENDS_FEES', 'MTD_PAID_DIVIDENDS_WITHHOLDING_TAX', 'YTD_UNSETTLED_FIN_INTEREST',
    'YTD_UNREALIZED_FEES_AND_COMMISSIONS', 'YTD_TRADING_PNL_AT_COST_FX', 'YTD_TRADING_PNL',
    'YTD_TOTAL_INTEREST', 'YTD_TRS_FX_UNREALIZED_ADJUSTMENT', 'YTD_SETTLEMENT_ACCRUED_INTEREST',
    'YTD_ST_TRADING_REALIZED', 'YTD_REBATE', 'YTD_REALIZED_TRADING_PNL', 'YTD_REALIZED_TAXES',
    'YTD_REALIZED_PNL', 'YTD_REALIZED_FEES', 'YTD_REALIZED_COMMISSIONS', 'YTD_REALIZED_ACCRUED_INTEREST',
    'YTD_PRINCIPAL_AMOUNT', 'YTD_PAID_DIVIDENDS_WITHHOLDING_TAX', 'YTD_PAID_DIVIDENDS_FEES', 'YTD_PAID_DIVIDENDS',
    'YTD_PAID_DELAYED_COMPENSATION', 'YTD_PAID_COST_OF_CARRY', 'YTD_PAID_LESS_FX_CONTRIBUTION', 'YTD_PNL_CHANGE',
    'YTD_OTHER_PAID_DIVIDENDS', 'YTD_OTHER_INTEREST', 'YTD_OTHER_FINANCING_INTEREST', 'YTD_OTHER_FINANCING_ACCRUED_INTEREST',
    'YTD_OTHER_FINANCING', 'YTD_OTHER_EXPENSES', 'YTD_OTHER_ACCRUED_INTEREST', 'YTD_OTHER_ACCRUED_DIVIDENDS_WITHHOLDING_TAX',
    'YTD_OTHER_ACCRUED_DIVIDENDS', 'YTD_NET_INTEREST', 'YTD_LT_TRADING_REALIZED', 'YTD_IMPLIED_FEES', 'YTD_IMPLIED_COMMISSION',
    'YTD_GROSS_TRADING_UNREALIZED', 'PNL_GL_NAV', 'PNL_GL_PNL', 'PNL_GL_PNL_GL_NAV', 'PNL_ADJUSTMENT_FX_REALIZED_CONTRIBUTION',
    'PNL_ADJUSTMENT_FX_UNREALIZED_CONTRIBUTION', 'PNL_EIGHT_WEEK_AGO', 'PNL_FOUR_WEEK_AGO', 'PNL_PBD', 'PNL_REALIZED_ADJUSTMENT',
    'PNL_SOM', 'PNL_SOQ', 'PNL_SOSA', 'PNL_SOW', 'PNL_SOY', 'PNL_SIX_WEEK_AGO', 'PNL_TWELVE_WEEK_AGO', 'PNL_TWO_WEEK_AGO',
    'PNL_UNREALIZED_ADJUSTMENT', 'PNL_WEEK_AGO', 'PTD_PNL', 'MTD_DIVIDEND_FEE', 'MTD_GROSS_TRADING_REALIZED',
    'MTD_PAID_DIVIDENDS_FEE_FX_REALIZED', 'MTD_PAID_DIVIDENDS_FEE_NET_OF_FX', 'MTD_PAID_DIVIDENDS_WITHHOLDING_FX_REALIZED',
    'MTD_PAID_DIVIDENDS_WITHHOLDING_NET_OF_FX', 'MTD_PAID_DIVIDENDS', 'MTD_REALIZED_COMMISSIONS', 'MTD_REALIZED_FEES',
    'MTD_REALIZED_PNL', 'MTD_REBATE', 'MTD_ST_TRADING_REALIZED', 'MTD_SETTLEMENT_ACCRUED_INTEREST', 'MTD_TAXES',
    'MTD_TOTAL_REALIZED_TRADING_FX', 'MTD_TOTAL_UNREALIZED_TRADING_FX', 'MTD_TRADING_PNL', 'MTD_TRADING_PNL_AT_COST_FX',
    'MTD_UNREALIZED_FEES_AND_COMMISSIONS', 'YTD_FINANCING', 'YTD_FINANCING_ACCRUED_INTEREST', 'YTD_FINANCING_INTEREST',
    'YTD_FINANCING_RESET_REALIZED_TRADING_PNL', 'YTD_GROSS_TRADING', 'YTD_GROSS_TRADING_REALIZED', 'YTD_TAXES', 'POSITION_ID', ]

export const pSColDef =[
    {
        headerName: 'Sum of $ Daily Realized P&L',
        field: 'SDRPNL',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.SDRPNL, '$'),
        cellStyle: (params) => cellStyle(params),
    },
    {
        headerName: 'Sum of $ Daily P&L',
        field: 'SDPNL',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.SDPNL, '$'),
        cellStyle: (params) => cellStyle(params)

    },
    {
        headerName: 'Sum of $ MTD P&L',
        field: 'SMTDPNL',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.SMTDPNL, '$'),
        cellStyle: (params) => cellStyle(params)
    },
    {
        headerName: 'Sum of $ YTD P&L',
        field: 'SYTDPNL',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.SYTDPNL, '$'),
        cellStyle: (params) => cellStyle(params)
    },
    {
        headerName: 'Sum of $ P&L',
        field: 'SPNL',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.SPNL, '$'),
        cellStyle: (params) => cellStyle(params)
    },
    {
        headerName: 'Number of Records',
        field: 'P_COUNT',
        enableCellChangeFlash: true,
        cellStyle: {textAlign: "right"}
    }
];
export const positionSummaryColDef= [
    {
        headerName: 'Fund Name', field: 'FUND_NAME'
    },
    ...pSColDef

];
export const strategySummaryColDef= [
    {
        headerName: 'Strategy Name', field: 'STRATEGY'
    },
    ...pSColDef
];

export const pSNColDef = [
    {
        headerName: 'Sum of $ Delta Adjusted LMV',
        field: 'S_DELTA_ADJ_LMV',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.S_DELTA_ADJ_LMV, '$'),
        cellStyle: (params) => cellStyle(params),
    },
    {
        headerName: 'Sum of $ Delta Adjusted SMV',
        field: 'S_DELTA_ADJ_SMV',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.S_DELTA_ADJ_SMV, '$'),
        cellStyle: (params) => cellStyle(params),
    },
    {
        headerName: 'Sum of $ Delta Adjusted NMV',
        field: 'S_DELTA_ADJ_NMV',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.S_DELTA_ADJ_NMV, '$'),
        cellStyle: (params) => cellStyle(params),
    },
    {
        headerName: 'Sum of $ Beta Adjusted NET',
        field: 'S_BETA_ADJ_NET',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.S_BETA_ADJ_NET, '$'),
        cellStyle: (params) => cellStyle(params),
    },
    {
        headerName: 'Sum of $ Gamma',
        field: 'S_GAMMA',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.S_GAMMA, '$'),
        cellStyle: (params) => cellStyle(params),
    },
    {
        headerName: 'Sum of $ Vega',
        field: 'S_VEGGA',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.S_VEGGA, '$'),
        cellStyle: (params) => cellStyle(params),
    },
    {
        headerName: 'Sum of $ Theta',
        field: 'S_THETA',
        enableCellChangeFlash: true,
        valueFormatter: (params) => currencyFormatter(params.data?.S_THETA, '$'),
        cellStyle: (params) => cellStyle(params),
    }
];

export const positionSummaryByFColDef= [
    {
        headerName:'Fund Name', field:'FUND_NAME'
    },
    ...pSNColDef
]

export const positionByDeal = [
    {
        headerName:'Deal', field:'DEAL'
    },
    ...pSNColDef
]

export const positionByTag = [
    {
        headerName:'Tag', field:'TAG'
    },
    ...pSNColDef
]
export const custodianColDef = [
    {
        headerName:'Custodian Description',
        field:'CUSTODIAN_ACCT_DIS_NAME',
        enableCellChangeFlash: true
    },
    {
        headerName:'Sum of Fair Market Value',
        field:'SFMV',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SFMV, "$")
    },
    {
        headerName:'Sum of Notional Proceeds',
        field:'SNOTNETPRO',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SNOTNETPRO, "$")
    },
    {
        headerName:'Average Trade Price',
        field:'ATPRICE',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.ATPRICE, "$")
    }
];

export const transactionTypeColDef=[
    {
        headerName:'Transaction Type',
        field:'TRANSACTION_TYPE',
    },
    {
        headerName:'Standard Deviation on Adjusted Price',
        field:'SDADJPRICE',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => percentFormatter(params.data?.SDADJPRICE, "%")
    },
    {
        headerName:'Average Fair Market Value',
        field:'AFMV',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.AFMV, "$")
    },
    {
        headerName:'Average Trade Price',
        field:'ATPRICE',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.ATPRICE, "$")
    }
]
export const counterPartyColDef=[
    {
        headerName:'Counter Party',
        field:'COUNTERPARTY'
    },
    {
        headerName:'Sum of Notional Proceeds',
        field:'SNOTNETPRO',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SNOTNETPRO, "$")
    },
    {
        headerName:'Sum of Fair Market Value',
        field:'SFMV',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SFMV, "$")
    },
    {
        headerName:'Average Fair Market Value',
        field:'AFMV',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.AFMV, "$")
    }
]


export const summaryColDef =[
    {
        headerName: 'Sum of Daily P&L',
        field:'SDPNL',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SDPNL, "$")
    },
    {
        headerName: 'Sum of MTD P&L',
        field:'SMTDPNL',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SMTDPNL, "$")
    },
    {
        headerName: 'Sum of YTD P&L',
        field:'SYTDPNL',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SYTDPNL, "$")
    },
    {
        headerName: 'Sum of ITD P&L',
        field:'SITDPNL',
        enableCellChangeFlash: true,
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.SITDPNL, "$")
    }
]

export const summaryFundColDef = [
    {
    headerName:'Fund Name',
    field:'FUND_NAME',
    },
    ...summaryColDef
]

export const summaryTagColDef = [
    {
        headerName:'Tag',
        field:'TAG',
    },
    ...summaryColDef

]
export const summaryDealColDef = [
    {
        headerName:'Deal',
        field:'DEAL',
    },
    ...summaryColDef

]


export const tradeColDef =[
    {field:'FUND_NAME'},
    {field:'COUNTERPARTY'},
    {field:'TRADE_DATE'},
    {field:'TRANSACTION_TYPE'},
    {field:'BB_YELLOW_KEY'},
    {field:'TRADE_DESC'},
    {field:'NOTIONAL_QUANTITY'},
    {field:'TRADE_PRICE'},
    {field:'ADJUSTED_PRICE'},
    {field:'NET_TRADE_PRICE'},
    {field:'TRADING_PROCEEDS'},
    {field:'SEC_FEES'},
    {field:'GROSS_FEES'},
    {field:'FEES'},
    {field:'GROSS_COMMISSION'},
    {field:'GROSS_COMMISSIONS'},
    {field:'NET_COMMISSIONS'},
    {field:'FEES_AND_COMMISSIONS'},
    {field:'NOTIONAL_NET_PROCEEDS'},
    {field:'TRADING_NOTIONAL_NET_PROCEEDS'},
    {field:'TRADING_NET_PROCEEDS'},
    {field:'ABSOLUTE_TRADING_NOTIONAL_NET_PROCEEDS'},
    {field:'TRADE_CURRENCY'},
    {field:'SETTLE_DATE'},
    {field:'BOOK_NAME'},
    {field:'CUSTODIAN_ACCT_DIS_NAME'},
    {field:'TRADE_ID'},
    {field:'TRADE_CANCELED'},
    {field:'TXN_TYPE'},
    {field:'EXTERNAL_REFERENCE'},
    {field:'COMMISSION_PER_SHARE'},
    {field:'TRADE_MODIFY_DATE'},
    {field:'END_BROKER_COMMISSIONS'},
    {field:'FCM_CLEARING_MARKUP'},
    {field:'GROSS_TAXES'},
    {field:'IMPLIED_COMMISSIONS'},
    {field:'IMPLIED_FEES'},
    {field:'IMPLIED_TAXES'},
    {field:'INITIAL_MARGIN'},
    {field:'NSA_FEE'},
    {field:'NET_GST'},
    {field:'PIT_FEES'},
    {field:'TRADE_EXCHANGE_FEES'},
    {field:'TRANSFER_ACCRUED_DIVIDENDS'},
    {field:'TRANSFER_ACCRUED_DIVIDENDS_WITHHOLDING_TAX'},
    {field:'TRANSFER_ACCRUED_INTEREST'},
    {field:'TRANSFER_FX_REALIZED'},
    {field:'TRANSFER_FEES_AND_COMMISSIONS'},
    {field:'TRANSFER_FINANCING_ACCRUED_INTEREST'},
    {field:'TRANSFER_FINANCING_INTEREST'},
    {field:'TRANSFER_INTEREST'},
    {field:'TRANSFER_PAID_DIVIDENDS'},
    {field:'TRANSFER_PAID_DIVIDENDS_WITHHOLDING_TAX'},
    {field:'TRANSFER_TRADING_REALIZED'},
    {field:'ACCRUED_INTEREST'},
    {field:'ACCRUED_INTEREST_OVERRIDE'},
    {field:'ACCRUED_INTEREST_WH_TAX'},
    {field:'ACCRUED_SETTLE_TO_BASE_CCY_FX_RATE'},
    {field:'ACCRUED_TRADE_TO_BASE_CCY_FX_RATE'},
    {field:'ACCRUED_TRADE_TO_SETTLE_CCY_FX_RATE'},
    {field:'ADJUSTED_PARENT_TRADE_ID'},
    {field:'BORROW_AGREEMENT_CURRENCY'},
    {field:'BORROW_AGREEMENT_DESCRIPTION'},
    {field:'BORROW_AGREEMENT_ID'},
    {field:'ALLOCATED_TRADES_ACCOUNT_ID'},
    {field:'ALLOCATED_TRADES_ACCOUNTS'},
    {field:'ALLOCATED_TRADES_BOOK_ID'},
    {field:'ALLOCATED_TRADES_BOOK'},
    {field:'ALLOCATED_TRADES_CUSTODIAN'},
    {field:'ALLOCATED_TRADES_CUSTODIAN_ID'},
    {field:'ALLOCATED_TRADES_CUSTODIAN_SHORT_NAME'},
    {field:'ALLOCATED_TRADES_FUND_ID'},
    {field:'ALLOCATED_TRADES_SET_OF_CUSTODIAN_ID'},
    {field:'ALLOCATED_TRADES_SET_OF_CUSTODIAN'},
    {field:'ALLOCATION_INSTRUCTIONS'},
    {field:'ALLOCATION_OPTIMIZATION'},
    {field:'AMENDED_TRADE'},
    {field:'ALLOCATED_TRADE'},
    {field:'ALLOCATED_TRADES'},
    {field:'ARCHIVE_DATE'},
    {field:'ALLOCATED_TRADE_COUNT'},
    {field:'ALLOCATED_TRADE_ALL_HAVE_FINANCING'},
    {field:'ALLOCATED_TRADE_ALL_HAVE_BORROW'},
    {field:'ADJUSTED_ACTIVITY'},
    {field:'BULK_OR_ALLOCATED'},
    {field:'CLEARING_COMMISSION_RATE'},
    {field:'CLEARING_COMMISSION_TYPE'},
    {field:'COMMISSION_RATE'},
    {field:'COMMISSION_TYPE'},
    {field:'COMMISSION_AUTO_CALC'},
    {field:'COMMISSIONS'},
    {field:'COUNTERPARTY_ACCOUNT_NAME'},
    {field:'COUNTERPARTY_ACCOUNT_NUMBER'},
    {field:'COUNTERPARTY_AGENT_BIC_CODE'},
    {field:'COUNTERPARTY_AGENT_DSS_CODE'},
    {field:'COUNTERPARTY_AGENT_NAME'},
    {field:'COUNTERPARTY_AGENT_SETTLEMENT_COUNTRY'},
    {field:'COUNTERPARTY_BIC_CODE'},
    {field:'COUNTERPARTY_COMMISSION_MAX_LIMIT'},
    {field:'COUNTERPARTY_COMMISSION_MIN_LIMIT'},
    {field:'COUNTERPARTY_CONTACT_NAME'},
    {field:'COUNTERPARTY_CONTACT_ID'},
    {field:'COUNTERPARTY_CONTACT_NAMES'},
    {field:'COUNTERPARTY_COUNTRY_CODE'},
    {field:'COUNTERPARTY_COUNTRY_NAME'},
    {field:'EXECUTION_BROKER_SHORT_NAME'},
    {field:'EXECUTION_COMMISSION'},
    {field:'EXECUTION_COMMISSION_RATE'},
    {field:'EXECUTION_COMMISSION_TYPE'},
    {field:'EXERCISE_RATE'},
    {field:'FAR_FIXING_DATE'},
    {field:'FAR_FIXING_RATE'},
    {field:'FAR_FX_RATE'},
    {field:'FAR_COUNTER_CURRENCY'},
    {field:'FAR_BASE_QUANTITY'},
    {field:'UP_FRONT_FEE'},
    {field:'FAIR_MARKET_VALUE'},
    {field:'TRADING_NOTIONAL_PROCEEDS'},
    {field:'TRADER'},
    {field:'TRADE_TRS_START_DATE_OVERRIDE'},
    {field:'TRADE_TRS_SPREAD_DATE_OVERRIDE_EFFECTIVE_RATE'},
    {field:'TRADE_TRS_SPREAD_DATE_OVERRIDE_EFFECTIVE_DATE'},
    {field:'TRADE_TRS_PAYMENT_RESET_RATE_METHOD_OVERRIDE'},
    {field:'TRADE_TRS_PAYMENT_RESET_FREQUENCY_OVERRIDE'},
    {field:'TRADE_TRS_PAYMENT_LEG_PAYMENT_FREQUENCY_OVERRIDE'},
    {field:'TRADE_TRS_PAYMENT_ACCRUAL_METHOD_OVERRIDE'},
    {field:'TRADE_TRS_FLOATING_RATE_LOOKBACK_DAYS_OVERRIDE'},
    {field:'TRADE_TRS_FLOATING_RATE_INDEX_ID_OVERRIDE'},
    {field:'TRADE_TRS_END_DATE_OVERRIDE'},
    {field:'TRADE_FEE'},
    {field:'TRADE_CREATE_DATE'},
    {field:'TAXES'},
    {field:'TRANSACTION_TYPE_SHORT'},
    {field:'TRADING_TYPE'},
    {field:'TRADING_TIME'},
    {field:'TRS_RETURN_LEG_FIRST_RESET_DATE_AFTER_TRADE_DATE'},
    {field:'TRS_PAY_LEG_FIRST_RESET_DATE_AFTER_TRADE_DATE'},
    {field:'TRS_PAY_LEG_FIRST_PAYMENT_DATE_AFTER_TRADE_DATE'},
    {field:'TRS_MATURITY_DATE_FOR_TRADE'},
    {field:'TRS_CURRENT_RESET_SPREAD'},
    {field:'T_3_BUSINESS_DAYS'},
    {field:'SOFT_DOLLAR_COMMISSION'},
    {field:'SIZE'},
    {field:'SINKING_FACTOR_AS_OF_SETTLE_DATE'},
    {field:'SETTLEMENT_DAYS'},
    {field:'TRADE_SETTLEMENT_DAYS'},
    {field:'TRS_LAST_CASH_DIVIDEND_TAX_RATE'},
    {field:'TRS_LAST_CASH_DIVIDEND_TYPE'},
    {field:'TRS_LAST_FX_RATE'},
    {field:'TRS_LAST_FX_RATE_EFFECTIVE_DATE'},
    {field:'TRS_LAST_FX_RATE_TERMINATION_DATE'},
    {field:'TRS_LONG_SHORT'},
    {field:'TRS_MERGE_TRS_AND_SECURITY_MASTER_CASH_DIVIDENDS'},
    {field:'TRS_NOTIONAL_CURRENCY'},
    {field:'TRS_NOTIONAL_CURRENCY_ID'},
    {field:'TRS_NOTIONAL_CURRENCY_TYPE'}
]

export const asColDef =[
    {
        headerName:'Fund Name',
        field:'FUND_NAME',
        minWidth: 300,
    },
    {
        headerName:'Commitments',
        field:'COMMITMENT',
        editable:true,
        cellStyle:(params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.COMMITMENT,"$"),
    },
    {
        headerName:'Capital Called / Deployed',
        field:'CAPITAL_CALLED',
        editable: true,
        cellStyle:(params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.CAPITAL_CALLED,"$"),
    },
    {
        headerName:'Unfunded Commitment',
        field:'UNFUNDED_COMMITMENT',
        cellStyle:(params) => cellStyle(params),
        valueFormatter: params => currencyFormatter(params.data?.UNFUNDED_COMMITMENT,"$"),
        enableCellChangeFlash: true,
    },
    {
        headerName:'% Called/ Deployed',
        field:'PERCENT_CALLED',
        cellStyle: (params) => cellStyle(params),
        valueFormatter: params => percentFormatter(params.data?.PERCENT_CALLED, "%"),
        enableCellChangeFlash: true,
    },

]

