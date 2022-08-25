let animal = {
    isAlive: true
}

function Rabbit(name) {
    this.name = name
}

//prototype은 숨겨져 있어, 그것을 보여주기 위한 별명을 보여주는 것 [[]]
//결과 값은 {} - object 로 나옴. 부모가 object인거임.
console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive) //당근 undefiend


Rabbit.prototype = animal
console.log(Rabbit.prototype)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)

//
function Duck(name) {
    this.name = name
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__)
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck.__proto__.constructor == duck.__proto__.constructor) // 생성자의 주소값을  그대로 물려받아서

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')