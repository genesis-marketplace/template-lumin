import { html } from '@microsoft/fast-element';
import type { Admin } from './admin';

export const AdminTemplate = html<Admin>`
  <!-- insert template code here -->
  <zero-layout>
      <zero-layout-region type="horizontal">
          <zero-layout-item title="User Management">
                  <user-management ></user-management>
          </zero-layout-item>
          <zero-layout-region type="tabs">
              <zero-layout-item title="Profile Management">
                  <profile-management></profile-management>
              </zero-layout-item>
              <zero-layout-item title="Right Management">
                  <entity-management resourceName="ALL_RIGHTS"
                                     createEvent="EVENT_RIGHT_INSERT"
                                     updateEvent="EVENT_RIGHT_MODIFY"
                  ></entity-management>
              </zero-layout-item>
              <zero-layout-item title="Profile Right Management">
                  <entity-management resourceName="ALL_PROFILE_RIGHTS"
                                     createEvent="EVENT_PROFILE_RIGHT_INSERT"
                  ></entity-management>
              </zero-layout-item>
              <zero-layout-item title="User Attributes">
                  <entity-management resourceName="ALL_USER_ATTRIBUTES"
                                     createEvent="EVENT_USER_ATTRIBUTES_INSERT"
                  ></entity-management>
              </zero-layout-item>
          </zero-layout-region>
      </zero-layout-region>
  </zero-layout>
`;
