import { customElement, FASTElement } from '@microsoft/fast-element';
import { FlashStyles as styles } from './flash.styles';
import { FlashTemplate as template } from './flash.template';

@customElement({
  name: 'flash-route',
  template,
  styles,
})
export class Flash extends FASTElement {
  constructor() {
    super();
  }
}
