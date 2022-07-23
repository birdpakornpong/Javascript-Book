/*
    Symbol have 2 features
    1. Unique
    2. Immutable ไม่สามารถเปลี่ยนแปลงได้

    มักใช้แทนชื่อ key object  instead string as the name key
    often used instead key object
*/

let sym1 = Symbol("example")
let sym2 = Symbol("example")

console.log('sym unique', sym1 == sym2) // false

let sym = Symbol("first symbol")
let obj = { [sym] : 100 }

console.log('obj[sym', obj[sym])
obj[sym] = 200
console.log('obj[sym] edit ', obj[sym])

let lastSym = Symbol("lasy Sysbol")
let beforeLastSym = Symbol("lasy Sysbol")
Object.defineProperties(obj, {
    beforeLastSym : {
        value: 400,
        writable: true
    },
    [lastSym]: {
        value: 300,
        writable: true
    }
})

console.log('obj[lastSym]', obj[lastSym])
console.log('beforeLastSym', obj.beforeLastSym)

Object.defineProperty(obj, sym, { writable: false}) // แก้ไม่ได้ obj[sym]

console.log('obj', obj)

console.log('string', sym.toString()) // symbol to string
console.log('test string', sym.toString() + "bird")