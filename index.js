let car = {
    make: "Ford",
    model: "Capri",
    year: 1978,
    __proto__: {
        start(extraText) {
            console.log(`${this.make} ${this.model} ise salindi. ${extraText}.`)
        }
    }
}

car.start("Traditional")

let car2 = {
    make: "Dodge",
    model: "Charger",
    year: 1971
}

// BIND
let car2_start_bind = car.start.bind(car2)
car2_start_bind("Bind")

// CALL
car.start.call(car2, "Call")

// APPLY
car.start.apply(car2, ["Apply"])



let prototypeForCars = {
    info() {
        console.log(`Car model ${this.model} was made by ${this.make} in ${this.year}`)
    }
}

let car3 = {
    make: "Plymouth",
    model: "GTX",
    year: 1972,
    __proto__: prototypeForCars // method 1
}

// method 2
// car3.__proto__ = prototypeForCars;

car3.info()