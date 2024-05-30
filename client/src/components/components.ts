import { EntityManagement } from '@genesislcap/foundation-entity-management';
import { Form } from '@genesislcap/foundation-forms';
import { foundationLayoutComponents } from '@genesislcap/foundation-layout';
import {zeroGridComponents, zeroGridPro} from '@genesislcap/foundation-zero-grid-pro';
import { g2plotChartsComponents } from '@genesislcap/g2plot-chart';
import { FASTRouter } from '@microsoft/fast-router';
import { logger } from '../utils';
import { LicenseManager } from '@ag-grid-enterprise/core';
import {ExcelExportModule} from "@ag-grid-enterprise/excel-export";
import {MenuModule} from "@ag-grid-enterprise/menu";
import {StatusBarModule} from "@ag-grid-enterprise/status-bar";
import {SideBarModule} from "@ag-grid-enterprise/side-bar";
import {FiltersToolPanelModule} from "@ag-grid-enterprise/filter-tool-panel";
import {ColumnsToolPanelModule} from "@ag-grid-enterprise/column-tool-panel";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";
import {ModuleRegistry} from "@ag-grid-community/core";
import {OrdersChart} from "./orders-chart/orders-chart";
import {AumSummary} from "./flash-report/aum-summary/aum-summary";
import {OasMain} from "./flash-report/oas-main/oasMain";
import {Pavo} from "./flash-report/pavo/pavo";
import {customGridProStyles} from "../styles/custom-grid-pro-styles";

EntityManagement;
Form;
OrdersChart;
AumSummary;
OasMain;
Pavo;

ModuleRegistry.registerModules([
  SetFilterModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  StatusBarModule,
  MenuModule,
  ExcelExportModule,
]);


LicenseManager.setLicenseKey('CompanyName=GENESIS GLOBAL TECHNOLOGY LIMITED,LicensedGroup=Genesis Web,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=3,LicensedProductionInstancesCount=4,AssetReference=AG-035099,SupportServicesEnd=8_January_2024_[v2]_MTcwNDY3MjAwMDAwMA==da697ff647e3d57eb719529bdf1506f0');

enum ResourceType {
  LOCAL = 'LOCAL',
  REMOTE = 'REMOTE',
}

/**
 * TODO: Think about sharing import functions across micro frontends.
 */
function loadZeroFallback() {
  return import(
    /* webpackMode: "lazy" */
    '@genesislcap/foundation-zero'
  );
}

/**
 * Granular
 */
async function loadZeroDesignSystem() {
  let type = ResourceType.REMOTE;
  try {
    // @ts-ignore
    return await import('foundationZero/ZeroDesignSystem');
  } catch (e) {
    type = ResourceType.LOCAL;
    return await loadZeroFallback();
  } finally {
    logger.debug(`Using '${type}' version of foundationZero/ZeroDesignSystem`);
  }
}

export type LoadRemotesOptions = {};

export async function loadRemotes() {
  const { provideDesignSystem, baseComponents } = await loadZeroDesignSystem();
  return {
    ZeroDesignSystem: provideDesignSystem().register(
      baseComponents,
      zeroGridPro(
        {
            styles:  customGridProStyles,
        }
      ),
      zeroGridComponents,
      g2plotChartsComponents,
      foundationLayoutComponents,
    ),
  };
}

FASTRouter;
