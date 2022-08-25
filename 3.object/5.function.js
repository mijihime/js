function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)
console.log(sayHi.length) // jobs는 parameter 갯수를 셀 수 없어 myName만 셈

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

//
sayHi = function() {
    let count = 100 // 지역변수
    console.log('Hi')
    console.log(sayHi.count++) 
}

sayHi()
console.log(`call count: ${sayHi.count}`)

sayHi.count = 0 //여기서야 count에 값이 들어감
sayHi()
sayHi()
console.log(`call count: ${sayHi.count}`)
