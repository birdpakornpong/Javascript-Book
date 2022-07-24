// class-expresstion is abtribute function
function myFunction(classExpr) {
    let c = new classExpr()
    c.drive(119)
}

myFunction(
    class {
        drive(speed) {
            console.log('speed', speed)
        }
    }
)

// function return class expresstion
function myFunctionC() {
    return class {
        drive(speed) {
            console.log('speed', speed)
        }
    }
}

let Car = myFunctionC()
let carObj = new Car()
carObj.drive(118)


// technique IIFE
let carObj2 = new class {
    constructor(speed) {
        this.speed = speed
    }
    drive() {
        console.log('speed', this.speed)
    }
}(117)

carObj2.drive()