const debounce = (fn: Function, timeout: number) => {
  let timer: ReturnType<typeof setTimeout> | null = null
  return (...args: any[]) => {
    if (timer != null) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, timeout)
  }
}


const foo = (e: Event) => {
  console.log((e.target as HTMLInputElement).value)
}

const myInput: HTMLElement = document.getElementById('myInput') as HTMLElement

const debounceConsole = debounce(foo, 1000)

myInput.oninput = debounceConsole
