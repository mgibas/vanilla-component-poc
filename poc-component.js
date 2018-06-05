import {VanillaComponent, html} from './vanilla-component'
import style from './poc-component.scss'

class PocComponent extends VanillaComponent {
  _render () {
    return html`
    <div class$="${style.scope} root">
      <p class$="${style.text}">Im Scoped Vanilla</p>
      <p class="text">Im Overridable Vanilla</p>
    </div>`
  }
}
window.customElements.define('poc-component', PocComponent)
