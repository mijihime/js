let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr)

arr = [null, undefined, NaN]
console.log(arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)
console.log(arr[1])

console.log(arr.length)

//
let matrix = [
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr) // stack으로 표시
console.log(arr.pop()) // 꺼내기
console.log(arr)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr)
console.log(arr.shift()) 
console.log(arr)

//
a = [0, 1, 2]
b = a.slice(1) //return을 해서 주어 객체를 건드릴 수 없음
console.log(b, a)

//
arr = [0, 7, 8, 5]
arr.splice(1, 2, 11, 2, 3, 14) //지정된 부분을 잘라내고, 빈자리에 뒷 값들을 넣어줌 
console.log(arr)

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b'))

arr.splice(arr.indexOf('b')) // b이후로 잘라내고 싶어, return 안함 주어건드릴 수 있음.
console.log(arr)

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s)

// 과제: sort가 arr인지, 확인하라.
console.log(arr == s)

arr = [8, 11, 22, 34, 9] 
console.log(arr.sort()) //number가 아닌 string으로 정렬됨

console.log(arr.sort((a, b) => a - b)) //오름차순
console.log(arr.sort((a, b) => b - a)) //내림차순

//iterating
arr = ['a', 'b', 'c']
for(let i = 0; i < arr.length; i++)
    console.log(arr[i])

// 과제: 원소를 출력하라.
for(let key in arr) console.log(arr[key])
for(let val of arr) console.log(val) //value는 of!

//
function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(arr)

arr.forEach(print3)
console.log(arr)

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2) //원소들을 하나씩 가공하고 map으로 return함.
console.log(arr, arr2)

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(this.title, ':', studentName))
    }
}

group.list()


//
arr = ['hello', 'world', 2]
let greeting = arr.join() // 하나의 문자로 만들어줌
console.log(greeting) 
console.log(typeof greeting)

console.log(arr.join('/')) // '/'로 token(글자)을 나눔.
// 과제: arr.join()에서 'helloworld2'를 return 하라.
console.log(arr.join('')) 

//
arr = [1, 2, 3]
str = arr.toString()
console.log(str, '/', typeof str)

//
str = JSON.stringify(arr)
console.log(str, '/', typeof str)
