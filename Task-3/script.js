class CoffeeMake {
    on() {
        console.log('I turn on CoffeeMaker');
    }
    off() {
        console.log('I turn off CoffeeMaker');
    }
}

class DripCoffeeMachine extends CoffeeMake {
    constructor(volume, color) {
        super();
        this.volume = volume;
        this.color = color;
    }
    volumeDrip() {
        console.log(`My drip coffee machine can make me ${this.volume} liters of coffee`);
    }
    colorDrip() {
        console.log(`I've bought purple coffee machine and make coffee at this momemt`);
    }
}

class CarobCoffeeMachine extends CoffeeMake {
    constructor(size, material) {
        super();
        this.size = size;
        this.material = material;
    }
    sizeCarob() {
        console.log(`I can take ${this.size} mg of coffee in my carob`);
    }
    materialCarob() {
        console.log(`It's amazing, when I touch my ${this.material} handle`);
    }
}

class CoffeeMachine extends CoffeeMake {
    constructor(time, typeCoffee) {
        super();
        this.time = time;
        this.typeCoffee = typeCoffee;
    }
    timeMaking() {
        console.log(`I can make coffee for ${this.time} minutes`);
    }
    typeOfCoffee() {
        console.log(`My coffee machine can make ${this.typeCoffee} of coffee`);
    }
}

let cf = new CoffeeMachine(7, 12);
console.log(cf);
cf.on();
cf.off();
cf.timeMaking();
cf.typeOfCoffee();

let carobMachine = new CarobCoffeeMachine(150, "lazer");
carobMachine.sizeCarob();
