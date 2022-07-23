const persons = {
    fullName: function(param = "x", param2 = "y") {
        return this.firstName + " " + this.lastName + " " + param + " " + param2
    }
}

const bird = {
    firstName: "Bird",
    lastName: "Hiran"
}

console.log('persons.fullName.call(bird)', persons.fullName.call(bird, "give", "test"))

console.log('person.fullName.apply(bird)', persons.fullName.apply(bird))

console.log('person.fullName.apply(bird)', persons.fullName.apply(bird, ["super", "man"]))

let bindObject = persons.fullName.bind(bird) // binf with call ต่างกันที่ bind ต้องเรียกใช้ function อีกครั้ง
console.log('persons.fullName.bind(bird)', bindObject("give", "tests"))