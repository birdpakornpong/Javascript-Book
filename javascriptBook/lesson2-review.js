// declare many variable
let x = 1, y = {
    name: "pakornpong",
    lastName: "hiranjaraspiwat",
    fullname: function() {
        return `${this.name} ${this.lastName}`
    },
}

var array = [1, 2, 3, 4, 5]
array.length = 7 // [ 1, 2, 3, 4, 5, <2 empty items> ]

function outerFunc() {
    // do something 1
    return function innerFunc() { // return function
        // do something 2
    }
}

let inner = outerFunc() // do something 1
inner() // do something 2