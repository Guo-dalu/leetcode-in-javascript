const throttle = (fn, timeout) => {
  let timer = null
  return (...args) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args)
        timer = null
      }, timeout)
    }
  }
}

const throttleConsole = throttle(() => {
  console.log('lala')
}, 1000)

window.onscroll = throttleConsole
