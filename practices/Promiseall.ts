async function promiseAll (iterable: Array<any>): Promise<Array<any>> {
  let counter = iterable.length
  const result:any[] = []
  return new Promise((resolve, reject) => {
    if (counter === 0) {
      return resolve([])
    }
    iterable.forEach(async (v, index: number) => {
      try {
        result[ index ] = await v
        counter-- 
        if (counter === 0) {
          resolve(result)
        }
      } catch (err) {
        reject(err)
      }
    })
  })
}

const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']
