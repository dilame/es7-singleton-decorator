const INSTANCE = Symbol('singleton-decorator:instance')

/**
 * Returns an instance of the targets
 */
const getInstance = (target, args = []) => {

  // see if we already have an instance
  if (target[INSTANCE] instanceof target) {
    return target[INSTANCE]
  }
  else {
    // create a new instance
    let obj = Reflect.construct(target, args)
    target[INSTANCE] = obj
    return obj
  }
}

/**
 * Decorates the target with the explicit singleton behavior
 */
const decorateExplicit = (target) => {

  // define the getInstance() method on the target
  Object.defineProperty(target, 'getInstance', {
    value: (...args) => getInstance(target, args)
  })

  return target
}

/**
 * Decorates the target with the implicit singleton behavior.
 */
const decorateImplicit = (target) => {
  return (...args) => getInstance(target, args)
}

/**
 * The singleton decorator
 */
const singleton = (target_or_style) => {
  if (!(target_or_style instanceof Function)) {
    if (target_or_style === 'explicit') {
      return decorateExplicit
    }
    else if (target_or_style === 'implicit') {
      return decorateImplicit
    }
    else {
      throw new Error(`Unknown singleton style '${target_or_style}'. Please omit or specifiy either 'explicit' or 'implicit'.`)
    }
  }

  return decorateImplicit(target_or_style)
}

export default singleton
