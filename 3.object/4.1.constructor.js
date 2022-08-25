let makeUser = function(name, age) {
    return {
        name: name,
        age: age
    }
}

//중복 제거
makeUser = function(name, age) {
    return {
        name,
        age
    }
}

console.log(makeUser('doris', 57))

// 생성자(생성자는 나타내는 문법은 따로 없어서, 관례로 생성자를 표현하기 위해 대문자로 시작함)
function User(name) {
    //this = {} 라는 코드가 생략되어 있음, 근데 직접쓰면 안됨
    this.name = name
    this.greet = () => console.log(`I am ${this.name}`)
    //return this 생략되어있는 코드인데, 직접 적어도 상관 없음.
}

//let user1 = User('bob') //undefined - return 할 것도 없고 하니깐
//console.log(user1)

const user1 = new User('bob') //this 객체가 return 됨
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

//
let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

//
let human = new function() {
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'} //일부러 return을 해서 name이란 새로운 객체를 만듬 amy는 쓰레기가 됨
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)

console.log(BigUser().name, SmallUser()?.name)
// 과제: 앱이 살도록 위 코드를 수정하라.

//
const user = new Object()
console.log(user)
user.age = 12

// 복제
const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user)

person.name = 'mandarin'
console.log(user)