import { customElement, FASTElement } from '@microsoft/fast-element';
import { TradesStyles as styles } from './trades.styles';
import { TradesTemplate as template } from './trades.template';
import {EntityManagement} from "@genesislcap/foundation-entity-management";

@customElement({
  name: 'trade-route',
  template,
  styles,
})
export class Trades extends FASTElement {
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback()
  }
}
