function addTwoLargeNumbers (a: string, b: string): string {
  let maxLength
  if (a.length > b.length) {
    maxLength = a.length
    b = b.padStart(maxLength, '0')
  } else {
    maxLength = b.length
    a = a.padStart(maxLength, '0')    
  }
  let t = 0, f = 0
  let result = ''
  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(a[ i ]) + parseInt(b[ i ]) + f
    t = sum % 10
    result = `${ t }${ result }`
     f = Math.floor(sum / 10)
  }
  if (f  === 1) {
    result = `1${result}`
  }
  return result
}

const a = "9007199254740991";
const b = "1234567899999999999";

console.log(addTwoLargeNumbers(a , b))