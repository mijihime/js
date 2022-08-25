//2022.08.12

/*
const age = 16

{
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()
    tellAge()
}
*/

const age = 16
//sayAge() - TypeError: sayAge is not a function, sayAge가 있는데 에러 뜸
//tellAge() - ReferenceError ReferenceError: tellAge is not defined, tellAge가 없어 에러
console.log(sayAge)
// console.log(hello) - ReferenceError: hello is not defined

{
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()
    tellAge()
}

sayAge()
//tellAge()