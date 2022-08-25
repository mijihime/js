// 2022-08-12 밑이 아니라 위쪽에서 콜
//sayHi()

let name = 'neo'
sayHi();

function sayHi() { //fucntion declaration
    console.log('Hi', name) //할당문
}

// sayHello() //ReferenceError: Cannot access 'sayHello' before initialization

const sayHello = function() { // function expression
	console.log('Hello', name) //실행문
}

sayHello()