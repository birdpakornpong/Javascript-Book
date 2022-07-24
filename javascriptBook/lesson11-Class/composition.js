// อีกวิธีในการสืบทอดคลาส
class Calculation {
    constructor(a ,b) {
        this.a = a
        this.b = b
    }
    execute() {
        return this.a * this.b
    }
}
class Multiplying {
    constructor(calObj) {
        if (calObj instanceof Calculation) {
            this.calObj = calObj
        }
    }
    multiply() {
        return "this value is" + this.calObj.execute()
    }
}

let c1 = new Calculation(20,10)
let m1 = new Multiplying(c1)

console.log('m1 multiply', m1.multiply())
console.log('m1 multiply', m1.calObj.execute())
