import { html } from '@microsoft/fast-element';
import type { Audit } from './audit';

export const AuditTemplate = html<Audit>`
  <!-- insert template code here -->
  <zero-layout>
      <zero-layout-region type="horizontal">
          <zero-layout-item title="Trade Audit">
              <entity-management resourceName="ALL_TRADES_AUDIT">
              </entity-management>
          </zero-layout-item>
          <zero-layout-item title="Position Audit">
              <entity-management resourceName="ALL_POSITIONS_AUDIT">
              </entity-management>
          </zero-layout-item>
      </zero-layout-region>

  </zero-layout>
`;
