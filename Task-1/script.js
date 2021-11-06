class Worker {
    constructor(firstName, secondName, rate, days) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return this.rate * this.days;
    }
}

let worker = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker.firstName);
// console.log(worker.secondName);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

class Employee1 extends Worker {
    constructor(firstName, secondName, rate, days) {
        super(firstName, secondName, rate, days);
    }
}

let employee1 = new Employee1('Petro', 'Petriv', 5, 25);
// console.log(employee1.firstName);
// console.log(employee1.secondName);
// console.log(employee1.rate);
// console.log(employee1.days);
// console.log(employee1.getSalary());

class Employee2 extends Worker {
    constructor(firstName, secondName, rate, days) {
        super(firstName, secondName, rate, days);
    }
}

let employee2 = new Employee1('Max', 'Maxonov', 15, 19);
console.log(employee2.firstName);
console.log(employee2.secondName);
console.log(employee2.rate);
console.log(employee2.days);
console.log(employee2.getSalary());