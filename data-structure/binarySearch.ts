const binarySearch = (arr: number[], n: number): number => {
  if (arr.length <= 1) {
    return arr[0] === n ? 0 : -1
  }
  const pivot = Math.floor(arr.length / 2)
  if (arr[ pivot ] === n) {
    return pivot
  }
  else if (arr[ pivot ] > n) {
    return binarySearch(arr.slice(0, pivot), n)
  } else {
    const result = binarySearch(arr.slice(pivot), n)
    return result === -1 ? -1 : result + pivot
  }
}

console.log(binarySearch([-1, 2, 3, 4, 5, 6, 10], 3))