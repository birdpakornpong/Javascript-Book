// Reduce
    // Grouping objects by a property
    let peoples = [
        {
            name: "alice", age: 21
        },
        {
            name: "Max", age: 22
        },
        {
            name: "Jane", age: 22
        },
        {
            name: "Jane", age: 23
        }
    ]

    let groupPeople = peoples.reduce(function(acc, people ) {
        let key = people.age
        console.log('key', key)
        console.log('acc',acc)

        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(people)
        return acc
    }, {}) // ต้องใส่ค่าเริ่มต้น ไม่งั้น reduce เอา object ตัวแรกเป็น ค่าเริ่มต้น
