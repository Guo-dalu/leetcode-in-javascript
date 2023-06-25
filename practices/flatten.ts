type ArrayValue = any | ArrayValue[]

function flatten (arr: ArrayValue[]): any[] {
  return arr.reduce((prev, v) => {
     return prev.concat(Array.isArray(v) ? flatten(v) : v)
   }, [])
}

flatten([2,[3,5,[46]]])