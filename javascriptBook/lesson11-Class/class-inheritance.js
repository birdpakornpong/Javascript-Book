class Calculation {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    multiply() {
        return this.a * this.b
    }
}

let cal = new Calculation(10,25)
// console.log('cal.multiply()', cal.multiply())

class Division extends Calculation {
    constructor(a,b) {
        super(a,b)
    }
    divide() {
        return this.a / this.b
    }
}

let div = new Division(20,5)
// console.log('div.multiply()', div.multiply())
// console.log('div.divide()', div.divide())

class Animal {
    constructor(name) {
        this.name = name
    }
    showName() {
        console.log('Animal name =', this.name)
    }
    static sleep() {
        console.log('Animal Sleep')
    }
}

class Quadruped extends Animal {
    constructor(name, color){
        super(name)
        this.color = color
    }
    showColor() {
        console.log('Animal Color =', this.color)
    }
}

class Dog extends Quadruped {
    constructor(name, color, velority) {
        super(name, color)
        this.velority = velority
    }
    run() {
        console.log('Dog run ', this.velority)
    }
}

let dogObj = new Dog("peter", "blue", 80)
dogObj.showName()
dogObj.showColor()
dogObj.run()
Dog.sleep()


/*
    Multiply Inheritance
*/
let MultyplyingObj = {
    multiply() {
        return this.a * this.b
    }
}

let DivisionObj = {
    divide() {
        return this.a / this.b
    }
}

function getClass (...args) {
    let merged = function(test) { // constructor ของการรวม class 
        this.test = test
    };
    Object.assign(merged.prototype, ...args);
    return merged;
}

class MyCalc extends getClass(MultyplyingObj, DivisionObj) {
    constructor(a, b, test) {
        super(test)
        this.a = a
        this.b = b
    }
}

let calc = new MyCalc(20,10, "bird")
// console.log('multiply', calc.multiply())
// console.log('calc', calc)

/* 
    inheritance class from javascript
*/

class ArrayExt extends Array {
    constructor(lenght) {
        super(lenght)
    }
    get(index) {
        return this[index]
    }
}

let a1 = ArrayExt.of("one", "two")
console.log('a1', a1.length)
console.log('a1get', a1.get(1))

let a2 = ArrayExt.from("one", "two")