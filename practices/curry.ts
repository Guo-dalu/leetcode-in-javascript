const curry = (fn:(...arg: number[]) => number) => {
  if (fn.length === 0) {
    return fn
  }
  const _curry = (deepth: number, args: number[]):any => (newArg:number) => {
    if (deepth === 1) {
      return fn(...args, newArg)
    }
    return _curry(deepth - 1, [...args, newArg])
  }
  return _curry(fn.length, [])
}

const rawAdd = (a: number, b:number, c:number, d: number) => a+b+c+d

const add = curry(rawAdd)
console.log(add(1)(2)(4)(9))


/*
   add(2)(4)()
   add(1,2,4)()
   add(1)(5,6)()
*/
function sum(...args: number[]) {
    return args.reduce((prev: number, v:number) => prev + v, 0)
}

const curry1 = (fn:Function):number | Function => {
  let args:number[] = []
    const _curry = (...newArgs:number[]) => {
        if (!newArgs?.length) {
          return fn(...args, ...newArgs)
        } else {
            args = args.concat(newArgs)
            return _curry
      }
    }
    return _curry
}

const addCurry = curry(sum)

console.log(addCurry(1, 2)(2)(10)())



