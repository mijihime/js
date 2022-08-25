let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

let fn = greet.bind(user) //call은 주어 function을 call, bind는 주어 function을 return
fn()

setTimeout(fn, 100)

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

//과제: fn에 user.greet을 할당하라. greet의 this엔 user가 담겨 있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)