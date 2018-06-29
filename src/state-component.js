import registry from './components-registry.js'
import { exposeFunction } from './component-helpers.js'
import store from './dummy-store.js'

export class StateComponent {
  constructor (el) {
    this.root = el
    store.init({foo: 'foo', bar: 'bar'})
    exposeFunction(this, this.root, 'flipFoo')
    exposeFunction(this, this.root, 'flipBar')
    store.subscribe(this.render.bind(this))
    this.render(store.state)
  }
  render (state) {
    let template = `
      <p>foo: ${state.foo} </p>
      <p>bar: ${state.bar} </p>
    `
    this.root.innerHTML = template
  }
  flipFoo () {
    store.commit({foo: store.state.foo.split('').reverse().join('')})
  }
  flipBar () {
    store.commit({bar: store.state.bar.split('').reverse().join('')})
  }
}

registry.define('state-component', StateComponent)
