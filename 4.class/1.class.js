class User{ // sugar syntax
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}`)
    }
}

let user = new User('john') //function 이나 class 쓰는 방법 비슷함
console.log(user.name)
user.introduce() //js는 프론트쪽에서 쓰기 때문에 class를 선호하진 않음

//[[isClassConstructior]]: true - 이 부분이 숨겨져 있는게 class의 특징.
//User('john') TypeError: Class constructor User cannot be invoked without 'new'
//즉 new를 붙여야만 한다는 얘기

//
User = class { //java스러움
    name
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce() 
console.log(user.name)
console.log(User.prototype.name)

//
function makeClass(pharse) {
    return class {
        sayHi() {
            console.log(pharse)
        }
    }
}

User = makeClass('hello')
new User().sayHi()