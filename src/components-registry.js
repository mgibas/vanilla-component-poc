let registry = {}

export default {
  define: (tagName, constructor) => {
    if (registry[tagName]) {
      console.warn(`Component '${tagName}' is already defined - skipping.`)
      return
    }

    registry[tagName] = {
      observer: new window.MutationObserver((mutations) => {
        console.log('registry dom mutation')
        let newComponents = mutations
          .filter((m) => m.type === 'childList')
          .filter((m) => m.addedNodes.length > 0)
          .reduce((addedNodes, m) => addedNodes.concat.apply([], m.addedNodes), [])
          .filter((n) => n.querySelectorAll)
          .reduce((components, node) => components.concat.apply([], node.querySelectorAll(tagName)), [])
        for (let i = 0; i < newComponents.length; i++) {
          return new constructor(newComponents[i])
        }
      })
    }
    registry[tagName].observer.observe(document, { childList: true, subtree: true })
    let elements = document.querySelectorAll(tagName)
    for (let i = 0; i < elements.length; i++) {
      return new constructor(elements[i])
    }
  }
}
