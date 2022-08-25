let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2)

let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.name : this.age
    } //메서드의 key를 symbol type으로 받음
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`) //객체가 기본타입으로 바뀌었습니다.
console.log(user > user2)
console.log(user + 50) // 더하기 연산자가 있을 경우, 문자인지 숫자인지 몰라서 default값으로 
console.log(user2 + 50)

//
user = {
    name: 'neo',
    age: 11,
    toString(){
        return this.name
    }
}

console.log(user + '')
user.valueOf = function() {
    return this.age
}
console.log(user + 100)

//http는 string으로 주고받기 때문에 http를 사용한단 가정하에 user를 string으로 바꾸는건
userStr = JSON.stringify(user)
console.log(userStr)
console.log(typeof userStr)

//serializing
//deserializing
