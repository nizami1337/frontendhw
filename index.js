// 1
class Employee {
    constructor(name, age, position, salary) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    promote(newPosition, newSalary) {
        this.position = newPosition;
        console.log(`${this.name} ${newPosition} vezifesine promote oldu. Maas artimi: ${newSalary - this.salary}`)
        this.salary = newSalary;
    }

    birthday() {
        this.age++;
        console.log(`${this.name} artiq ${this.age} yasindadir`)
    }

    displayInfo() {
        console.log(`Ad: ${this.name} | Yas: ${this.age} | Vezife: ${this.position} | Maas: ${this.salary}`)
    }
}

emp = new Employee("Ruslan", 24, "Junior Network Engineer", 800)
emp.displayInfo()
emp.birthday()
emp.promote("Senior Network Engineer", 1200)
emp.displayInfo()

// 2
function secondMin(array) {
    return array.sort()[1]
}

// 3
// Example student
// student = {
//     name: "Omer",
//     score: 95
// }
function highestScoreStudent(studentList) {
    stud = {name: '', score: 0}
    for (let i of studentList) {
        if (i.score > stud.score) {
            stud = i
        }
    }
    return stud
}
let studentList = [{name: "Asd", score: 78}, {name: "Qwe", score: 90}, {name: "Zxc", score: 83}]
console.log(highestScoreStudent(studentList))

// 4
function maxFrequency(array) {
    return array.filter(i => i == Math.max(...array)).length
}
