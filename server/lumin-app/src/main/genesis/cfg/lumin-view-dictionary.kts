/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide view config for multi-pro-code-test.
 *
 * Modification History
 */
views {
    view (name = "LUMIN_OAS_VIEW", LUMIN_OAS_CS){
        joins {
            joining(LUMIN_OAS_POS){
                on(LUMIN_OAS_CS.DEAL to LUMIN_OAS_POS { DEAL})
            }
        }
        fields {
            LUMIN_OAS_CS.allFields()
            LUMIN_OAS_POS.S_DELTA_ADJ_LMV
            LUMIN_OAS_POS.S_DELTA_ADJ_SMV
            LUMIN_OAS_POS.GROSS
            LUMIN_OAS_POS.LEVERAGE
        }
    }

    view (name = "LUMIN_PAVO_VIEW", LUMIN_PAVO_CS){
        joins {
            joining(LUMIN_PAVO_POS){
                on(LUMIN_PAVO_CS.DEAL to LUMIN_PAVO_POS { DEAL})
            }
        }
        fields {
            LUMIN_PAVO_CS.allFields()
            LUMIN_PAVO_POS.S_DELTA_ADJ_LMV
            LUMIN_PAVO_POS.S_DELTA_ADJ_SMV
            LUMIN_PAVO_POS.GROSS
            LUMIN_PAVO_POS.LEVERAGE
        }
    }
}
