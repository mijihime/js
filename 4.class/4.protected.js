class CoffeeMachine {
    waterAmount 

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(CoffeeMachine)

/*
class CoffeeMachine {
    waterAmount 

    constructor(voltage) {
        this.voltage = voltage
    }
}
*/

console.log(Object.keys(CoffeeMachine))
console.log(CoffeeMachine.prototype)

let machine = new CoffeeMachine(220)
console.log(machine)

machine.waterAmount = 1
machine.voltage = 100
console.log(machine)

//
CoffeeMachine = class {
    _waterAmount //protected

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine.prototype) //{constructor: ƒ, waterAmount: <accessor>}

machine = new CoffeeMachine()
console.log(machine) //CoffeeMachine {_waterAmount: undefined}

machine.waterAmount = 1
console.log(machine) //CoffeeMachine {_waterAmount: 2}
console.log(machine.waterAmount) //102

machine._waterAmount = 11 //get, set을 쓰지 않았기 때문에 accessor를 거치지 않음.
console.log(machine._waterAmount)