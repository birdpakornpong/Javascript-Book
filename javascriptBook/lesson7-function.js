function add(number) {
    return number * 2
}

function exampleFunction(number, doubleNumber = add(number), callback = () => { }) {
    console.log(`${number} ${doubleNumber} ${callback()}`) // 2 4 hello birth
    let arg1 = arguments[0], arg2 = arguments[1], arg3 = arguments[2];
    let lengthArg = arguments.length
    console.log(`${arg1} ${arg2} ${arg3} ${lengthArg}`)
}

exampleFunction(2, undefined ,() => "hello birth")


function iterateItem2(item, ...last) {
    console.log('item2', item) // 1
    console.log('item2', last) // [ 2, 3, 4, 5, 6 ]
    let result = item;
    let len = last.length
    for (let i = 0; i < len; i++) {
        result += last[i]
    }
    console.log('result2', result)
}
iterateItem2(1, 2, 3, 4, 5, 6)

// Spread Operator
let val = [-134, -20, -50, 5, 33, 78]
const spreadOperator = Math.max(...val)
console.log('spreadOperator', spreadOperator) // 78

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



/* Arrow Function Vs Function */


// 1. Arrow Function เรียกใช้ Object arguments ไม่ได้ 

function argumentSuddenly() {
    let [a, b, c] = arguments
    console.log('argument Funtion = ', a, b, c)
}
argumentSuddenly(5, 7)

// 2. Arrow Function เหมาะสำหรับ function callback