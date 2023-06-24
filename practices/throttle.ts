const throttle = (fn:Function, timeout:number) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (...args: any[]) => {
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
