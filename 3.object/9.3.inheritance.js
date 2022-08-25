let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

// 과제: 토기를 object literal 및 생성자로 만들어라.
//       토끼는 age = 3 property를 갖고 있다.


let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal //상속관계를 뜻하고 역시나 'is a' 관계로 만들어야 한다.
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age)

//
animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = {
    __proto__: animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}
 
console.log(administrator.name) //user

administrator.name = 'jonadan'
console.log(administrator.name) 

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat()

//
console.log(Object.keys(rabbit)) // eat은 prototype에서 들고와서 name만 있음

// 과제: rabbit의 key 들을 iterating 해서 출력하라.
for(let key in rabbit) console.log(key) // 상속관계까지 나타남

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) msg = `child's key: ${key}`
    else msg = `parent's key: ${key}`
    console.log(msg)
}