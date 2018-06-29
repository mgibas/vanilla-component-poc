import registry from './components-registry.js'
import { defineProperty } from './component-helpers.js'

export default class ClockComponent {
  constructor (el) {
    this.root = el
    defineProperty(this, this.root, 'now', { value: new Date(), onChange: this.render.bind(this) })
    setInterval(() => { this.now = new Date() }, 1000)
  }
  render (now) {
    let template = `
      <p>${now.toLocaleTimeString()}</p>
    `
    this.root.innerHTML = template
  }
}

registry.define('clock-component', ClockComponent)
