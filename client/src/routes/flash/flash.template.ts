import { html } from '@microsoft/fast-element';
import type { Flash } from './flash';

export const FlashTemplate = html<Flash>`
  <!-- insert template code here -->
  <zero-layout>
      <zero-layout-region type="horizontal">
          <zero-layout-item title="AUM Summary ($'mm)" size="40%">
                  <aum-summary></aum-summary>
          </zero-layout-item>
          <zero-layout-region type="horizontal">
              <zero-layout-item title="Alternative Fund OAS - Main Fund">
                  <oas-main></oas-main>
              </zero-layout-item>
              <zero-layout-item title="Alternative Fund Gamma">
                  <pavo-main></pavo-main>
              </zero-layout-item>
          </zero-layout-region>
      </zero-layout-region>
  </zero-layout>
`;
