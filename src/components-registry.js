let registry = {}

export default {
  define: (tagName, constructor) => {
    if (registry[tagName]) {
      console.warn(`Component '${tagName}' is already defined - skipping.`)
      return
    }

    registry[tagName] = {
      observer: new window.MutationObserver((mutations) => {
        mutations
          .filter((m) => m.type === 'childList')
          .filter((m) => m.addedNodes.length > 0)
          .reduce((addedNodes, m) => addedNodes.concat([...m.addedNodes]), [])
          .filter((n) => n.querySelectorAll)
          .reduce((components, node) => components.concat([...node.querySelectorAll(tagName)]), [])
          .forEach((c) => new constructor(c))
      })
    }
    registry[tagName].observer.observe(document, { childList: true, subtree: true })
    document.querySelectorAll(tagName).forEach((el) => new constructor(el))
  }
}
