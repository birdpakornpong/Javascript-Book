// กลับตัวอักษร
let string = 'abcdef'
let stringReverse = string.split('').reverse().join('')
// console.log('stringReverse', stringReverse)

// ตัดชื่อ นามสกุล
let fullName = 'roberto firmino junior'
let firstName = (fullName.split(' '))[0]
let lastName = fullName.substring(firstName.length).trim()
// console.log('firstName', firstName)
// console.log('lastName', lastName)

// นับตัวอักษร
let charactor = "school"
function countCharactor(string) {
    const splitString = string.split('')
    let count = splitString.reduce(function(acc, string) {
        if (!acc[string]) {
            acc[string] = 1
        } else {
            acc[string] += 1
        }
        return acc
    }, {})
    return count
}
// console.log('TestCountCharactor', countCharactor(charactor)) // { s: 1, c: 1, h: 1, o: 2, l: 1 }

// หรือ 
function countCharactor2(string) {
    let splitString = string.split('')
    let count = splitString.reduce(function(acc, charactor) {
        return {
            ...acc,
            [charactor]: (acc[charactor] || 0) + 1
        }
    },{})
    return count
}
// console.log('TestCountCharactor2', countCharactor2(charactor)) // { s: 1, c: 1, h: 1, o: 2, l: 1 }

// { s: 1, c: 1, h: 1, o: 2, l: 1 } to string 's1c1h1o2l1'
function encode2(input) {
    let objectCount = countCharactor2(input)
    let string = Object.entries(objectCount).join(',').replace(/,/g,'r')
    return string
}
// console.log('encode2', encode2('school'))


// นับเรียง ถอดรหัส ตัวอย่าง 'schooldddpanana' = 's1h1o2l1d3p1a1n1a1n1a1'
function decode(input) {
    let splitInput = input.split('')
    let repeatCount = splitInput.reduce(function (acc,string) {
        object = {
            char: string,
            value: 1
        }
        let lastObject = (acc.reverse())[0]
        let checkSameChar = lastObject && lastObject.char == object.char
        acc.reverse()
         if (checkSameChar) {
            acc[acc.length - 1].value += 1
        } else {
            acc.push(object)
        }
        return acc
    },[])
    return repeatCount
    /*
    [
        { char: 's', value: 1 },
        { char: 'c', value: 1 },
        { char: 'h', value: 1 },
        { char: 'o', value: 2 },
        { char: 'l', value: 1 },
        { char: 'd', value: 3 },
        { char: 'p', value: 1 },
        { char: 'a', value: 1 },
        { char: 'n', value: 1 },
        { char: 'a', value: 1 },
        { char: 'n', value: 1 },
        { char: 'a', value: 1 }
    ]
    */
}

function mapStringEncode(array) {
    let string = ''
    array.forEach((arr) => {
        string = string + arr.char + String(arr.value)
    })
    return string
}
console.log('string', mapStringEncode(decode('schooldddpanana'))) // 'schooldddpanana' = 's1h1o2l1d3p1a1n1a1n1a1'

function reverseEncode(string) {
    let splitString = string.split('')
    let numberOfRounds = splitString.length / 2
    let stringResult = ''
    for (let i = 0; i < numberOfRounds; i ++ ) {
        let numberMoreOne = splitString[i * 2 + 1] > 1
        let stringAdd = ''
        if (numberMoreOne) {
            for (let j = 0; j < splitString[i * 2 + 1]; j++) {         
                stringAdd =  stringAdd + splitString[i * 2]  
            } 
        } else {
            stringAdd = splitString[i * 2]
        }  
        stringResult = stringResult + stringAdd
    }
    console.log('string', stringResult)
    console.log('split', numberOfRounds)
}
reverseEncode('s1h1o2l1d3p1a1n1a1n1a1') // shooldddpanana


// function encodeNew(input) {
//     let inputSplit = input.split('')
//     let result = inputSplit.reduce((acc, val, index) => {
//         console.log('acc',acc)
//         console.log('val', val)
//         console.log('index', index)
//         let sameChar = val == inputSplit[index + 1]
//         if (sameChar) {

//         }
//         return acc += val
//     },'')
// }

// encodeNew('school')