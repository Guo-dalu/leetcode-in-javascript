const curry = (fn) => {
  if (fn.length === 0) {
    return fn
  }
  const _curry = (deepth, args) => (newArg) => {
    if (deepth === 1) {
      return fn(...args, newArg)
    } else {
      return _curry(deepth -1, [...args, newArg])
    }
  }
  return _curry(fn.length, [])
}

const add = (a, b, c) => a + b + c
curry(add)(2)(3)(1)