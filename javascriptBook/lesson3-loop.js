// Loop
let i = 0;
// while Loop
while (i < 5) {
    i++
}
// dowhile Loop
do {
    // do something
} while (i< 10)

// for Loop
nameLabelOne: for (let l = 0; l < 6; l++) {
    if (l == 2) {
        continue nameLabelOne // ข้าม do something
    } else if (l == 4) {
        break nameLabelOne // หยุดการทำงาน loop
    }
    // do something
    for (let k = 0; k < 10; k++) {
        if (k == 9) continue nameLabelOne // ข้าม do something ไป loop nameLabelOne 
        // do something
    }
}

let q = 0
nameLabelWhile: while (q < 9) {
    q++
    // do something
    for (let i = 0; i < 5; i++) {
        if (i == 3) break nameLabelWhile
    }
}

/*
while(condition) {
        statement
        }

        do {
        statement
        } while (condition)

        for ( ค่าเริ่มต้น; เงื่อนไข; การเพิ่มลดค่า) {
        statement
        }

        continue ใช้กับประโยคคำสั่งประเภท Loop เพื่อข้ามการทำงาน
        break ใช้กับประโยคคำสั่งประเภท Loop เพื่อหยุดการทำงาน

        *** label ใช้ร่วมกับ continue / break เพื่อข้ามไปทำงานที่ label tag name
*/