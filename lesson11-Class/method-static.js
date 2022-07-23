class Car {
    constructor(speed) {
        this.speed = speed
    }
    drive() {
        console.log('speed', this.speed)
    }
    static stop() { 
        console.log('stop')
    }
}

Car.stop() //  method static เข้าถึงได้เฉพาะชื่อ class โดยตรง
// method static access only by name Class directly


