const insertionSort = (arr: number[]): number[] => {
  for (let i = 1; i <= arr.length; i++){
    for (let j = i - 1; j > 0 && arr[j] < arr[j - 1]; j--) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      }
    }
  return arr
}



console.log(insertionSort([ -1, 10, 5, 4, 3, 6 ]))