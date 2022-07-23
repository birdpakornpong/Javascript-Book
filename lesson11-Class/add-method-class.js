// add method to Class 
class Car {
    constructor(speed) {
        this.speed = speed
        // this.friction = 0.15
    }
}

Object.defineProperty(Car.prototype, "drive", {
    value: function() {
        console.log('Drive speed', this.speed)
    },
    enumerable: false, // จำเป็็น   
    writable: true,
    configurable: true
})

let car = new Car(120)
car.drive()

for (let c in car) {
    let watchCar = c
    var obstructionVariable = "variable" // obstruction กีดขวาง
}