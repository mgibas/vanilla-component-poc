import {LitElement, html} from '@polymer/lit-element'

export class VanillaComponent extends LitElement {
  _createRoot () { return this }
}
export {html}
window.customElements.define('vanilla-component', VanillaComponent)
