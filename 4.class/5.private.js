class CoffeeMachine {
    #waterAmount

    get waterAmount() {
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(CoffeeMachine)
console.log(CoffeeMachine.prototype) // {constructor: ƒ, waterAmount: <accessor>}

let machine = new CoffeeMachine()
console.log(machine) // CoffeeMachine {#waterAmount: undefined}

machine.waterAmount = 1
console.log(machine.waterAmount) // 102

//machine.#waterAmount = 1 - SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
//직접 접근하는게 안됨. private이기 때문에, 즉 get, set을 써야하는게 의무가 됨