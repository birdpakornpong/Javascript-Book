/*
 Object = {
    property key: value / function
}
pass by value = เป็นการส่งค่า ด้วยการก้อปปี้ไปให้ตัวแปร
pass by referrence = เป็นการส่งค่า ด้วยการก้อปปี้ตำแหน่งในหน่วยความจำ หรือค่า reference ไปให้ตัวแปร
*/

let objectExample = {
    name: "bird",
    age: 25,
    luck: 99,
    introduce: function() {
        return this.name
    }
}
// add key to object 
objectExample.lastName = "birth"
objectExample.fullName = function() {
    console.log(`${this.name} ${this.lastName} ${this.introduce()}`)
}

function passValue(param1, param2) {
    param1["age"] = 30 // pass by referrence
    param2 = 25 // pass by value 
}
passValue(objectExample, objectExample.luck) // age: 30, luck: 99

let ArrayTest = [{a: 1, b: 2}, {a:3 , b:5}]
// operator in
let checkKeyValueObject = "age" in objectExample // true
let checkIndexArray =  1 in ArrayTest // true
delete objectExample.age // delete peoperty object

// call apply bind
let objExampleCallApplyBind = {
    value: 250
}
function exampleCallApplyBind(param1, param2) {
    console.log('test', this.value, param1, param2)
}

exampleCallApplyBind(2,6)
exampleCallApplyBind.call(objExampleCallApplyBind, 3 ,5)
exampleCallApplyBind.apply(objExampleCallApplyBind, [5,8])
let bindFunction = exampleCallApplyBind.bind(objExampleCallApplyBind, 6,8)
bindFunction()
// call ส่ง param ปกติ
// apply ส่ง param array
// bind เหมือน call แต่ bind return function