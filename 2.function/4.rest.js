//2022.08.12

function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3)) //초과된 나머지 파라미터를 무시함

//...은 args parameter를 restparameter(배열)로 만들어줌.
//rest 함수를 쓰게 되면 parameter 갯수의 한계를 벗어나게 되고, 본질은 배열이다.
add = function(...args) {
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}

console.log(add(1, 2, 3, 4))

//restparameter는 마지막에 위치해야 한다.
function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')

//arguments는 배열이라는것,,
function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

console.log(Math.max(1, 2, 3))

let arr = [1, 2, 3]
console.log(Math.max(arr))
console.log(Math.max(...arr))

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)