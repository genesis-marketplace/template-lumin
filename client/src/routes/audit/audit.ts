import { customElement, FASTElement } from '@microsoft/fast-element';
import { AuditStyles as styles } from './audit.styles';
import { AuditTemplate as template } from './audit.template';

@customElement({
  name: 'audit-route',
  template,
  styles,
})
export class Audit extends FASTElement {
  constructor() {
    super();
  }
}
