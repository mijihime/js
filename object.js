let arr = new Array(1, 'hello', true, {age: 3}, function fnI(){}, class A{})
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