class Calculation {
    constructor(a,b) {
        if (new.target === Calculation) {
            throw new Error("Abstract class")
        }
        this.a = a
        this.b = b
    }
    execute() {}
}

class Multiplying extends Calculation {
    constructor(a,b) {
        super(a,b)
    }
    execute() {
        return this.a * this.b
    }
}

class Division extends Calculation {
    constructor(a,b) {
        super(a,b)
    }
    execute() {
        return this.a / this.b
    }
}

class Subtraction extends Calculation {
    constructor(a,b) {
        super(a,b)
    }
    execute() {
        return this.a - this.b
    }
}

function math(calcObj) {
    if (calcObj instanceof Calculation) {
        console.log(calcObj.execute())
    }
}

math(new Subtraction(20,5))
math(new Division(25,5))