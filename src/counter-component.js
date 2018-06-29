import registry from './components-registry.js'
import { defineProperty, exposeFunction } from './component-helpers.js'

export default class CounterComponent {
  constructor (el) {
    this.root = el
    exposeFunction(this, this.root, 'inc')
    exposeFunction(this, this.root, 'dec')
    defineProperty(this, this.root, 'counter', {
      onChange: this.render.bind(this),
      reflectToAttribute: true
    })
  }
  render (counter) {
    let template = `
      <p>Counter: ${counter}</p>
    `
    this.root.innerHTML = template
  }
  inc () {
    this.counter++
  }
  dec () {
    this.counter--
  }
}

registry.define('counter-component', CounterComponent)
