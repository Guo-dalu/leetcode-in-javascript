
const deepClone = <T extends object>(target: T, cloneSet = new WeakSet()): T => {
  if (typeof target === 'object') {
    if (cloneSet.has(target)) {
      return target
    }
    cloneSet.add(target)
    
    let cloneTarget: any
    

    // set
    if (Object.prototype.toString.call(target) === '[object Set]') {
      cloneTarget = new Set();
      (target as Set<T>).forEach(v => cloneTarget.add(deepClone(v)))
    }
    // map
    if (Object.prototype.toString.call(target) === '[object Map]') {
      cloneTarget = new Map();
      (target as Set<T>).forEach((v,k) => cloneTarget.set(k ,deepClone(v)))
    }

    else {
      cloneTarget = Array.isArray(target) ? [] : {} 
      for (const key in target) {
        cloneTarget[key as keyof T] = deepClone(target[key as keyof T], cloneSet)
      }
    }
    return cloneTarget as T
  } else {
    return target
  }
}

const pet = {
    name: 'Kitty1',
    type: 'CAT',
}
const s = new Set('s2h43')
const m:Map<string, number> = new Map([['name', 234], ['ppo',3]])
  
const person:any = {
  pet,
  a: 'bfs',
  friends: [ 'John', 'Martin' ],
  s,
  m
}


person.pet.master = person

const p1 = deepClone(person)
const pet1 = deepClone(pet)