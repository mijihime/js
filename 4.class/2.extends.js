
class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}


let animal = new Animal('animal')
console.log(animal)
animal.run(10)
console.log(animal)
animal.stop()
console.log(animal)

//
class Rabbit extends Animal {
    /*
    constructor(...args) { //자동 생성되는 부분. super
        super(...args)
    }
    */

    hide() {
        console.log(this.name, 'hide')
    }
}

let rabbit = new Rabbit()
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
console.log(rabbit)
rabbit.hide()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }

    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(this.name, this.color, 'hide')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()
