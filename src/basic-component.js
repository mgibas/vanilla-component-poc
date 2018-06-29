import registry from './components-registry.js'
import style from './basic-component.scss'

export default class BasicComponent {
  constructor (el) {
    this.root = el
    this.root.classList.add(style.locals.basicComponent)
    this.render()
  }
  render () {
    let template = ` 
      <style>${style.toString()}</style>
      <div>
        <p class="${style.locals.text}">Im Scoped</p>
        <p class="${style.locals.text}" part="text">Im Overridable</p>
      </div>
      `
    this.root.innerHTML = template
  }
}

registry.define('basic-component', BasicComponent)
