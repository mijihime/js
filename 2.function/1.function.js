// 2022.08.11  <<function도 datatype 이다.>>

function greet() {
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
}

salute()
console.log(salute)

//변수명에 function이 담기기 때문에 변수명이 동사다.
let sayHello = function(user, greeting) {
    return `${greeting}, ${user}` // template literal
}

console.log(sayHello('rebecca', 'hello'))

// 과제: HI 라고 인사하는  function 을 정의하고, 실행하라.
const sayHi = function() {
    console.log('HI')
}

sayHi()

const say = sayHi
say()

//
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

/*
(function() {
    console.log('earth')  이름 없는 functoin 쓰기, 괄호 더 붙여줬음.
}) ()
*/

let myFn = function(fn) {
    const result = fn()
    console.log(result)
}
//파라미터로 function을 받고, function은 이름 없는 함수인데 그걸 fn에 넣음
//fn은 result에 담기고 그걸로 값을 냄.

myFn(function() {
    return 'moon'  //이름 없는 일회용 function
})

let argFn = function(){
    return 'star'
}
myFn(argFn)


                                 //default값
let showMsg = function(from, msg='no message'){
    console.log(`${from}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity')