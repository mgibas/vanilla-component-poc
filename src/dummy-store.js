class DummyStore {
  constructor () {
    this.state = {}
    this._subscribers = []
  }
  init (state) {
    this.state = state
  }
  subscribe (subscriber) {
    this._subscribers.push(subscriber)
  }
  commit (changes) {
    Object.assign(this.state, changes)
    for (let i = 0; i < this._subscribers.length; i++) {
      this._subscribers[i](this.state)
    }
  }
}

export default new DummyStore()
