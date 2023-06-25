const s = [ "h", "e", "l", "l", "o" ]

const reverseString = (strArr: string[]): void => {
  let temp = ''
  const length = strArr.length
  for (let i = 0; i < Math.ceil(length / 2); i++) {
    temp = strArr[ i ]
    strArr[ i ] = strArr[ length - i - 1 ]
    strArr[length - i - 1] = temp
  }
}

console.log(reverseString(s))