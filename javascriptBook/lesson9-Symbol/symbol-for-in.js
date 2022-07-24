let obj = {};
obj.car = "ferrari"
obj["zoo"] = "animals"
obj[Symbol("foo")] = "foo"
obj[Symbol("bar")] = "bar"

for (let i in obj) {
    console.log('i', i)
}

let keyObject = Object.getOwnPropertyNames(obj)
console.log('keyObject', keyObject)

let keySymbol = Object.getOwnPropertySymbols(obj)
console.log('keySymbols', keySymbol)