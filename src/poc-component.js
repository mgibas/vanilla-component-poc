import style from './poc-component.scss'

class PocComponent extends HTMLElement {
  connectedCallback () {
    this.classList.add(style.locals.scope)
    this.render()
  }
  render () {
    let template = ` 
      <style>${style.toString()}</style>
      <div>
        <p class="${style.locals.text}">Im Scoped Vanilla</p>
        <p class="${style.locals.text}" part="text">Im Overridable Vanilla</p>
      </div>
      <div class="${style.locals.parent}">
        <div class="${style.locals.child}" part="child">make me blue</div>
      </div>
      `
    this.innerHTML = template
  }
}
window.customElements.define('poc-component', PocComponent)
