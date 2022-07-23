// Global Symbol

let uuid = Symbol.for("uuid")
console.log('uuid', uuid)

let sym1 = Symbol.for("uuid")

console.log('check', uuid === sym1) // true เพราะ คือ symbol ตัวเดียวกัน 

let obj = {[uuid]: 100}

console.log('obj[sym2]', obj[sym1]) // 100 symbol ตัวเดียวกัน 

console.log('key for', Symbol.keyFor(sym1))