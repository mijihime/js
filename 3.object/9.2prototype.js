let obj = {} //New Object를 줄여 쓴 것

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)

obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) //proto의 proto는 null~~~~

console.log(obj.toString())

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__) //둘 다 array 의 속성을 이용했기 때문에
console.log(arr1.__proto__ == Array.prototype) 

console.log(Array.prototype.__proto__)
console.log(Object.prototype)
console.log(Array.prototype.__proto__ == Object.prototype)

console.log(arr2) // [1, 2] override 된거임

//
let one = new Number(1)
console.log(one) // Number (1)

//
function User() {}
let user = new User()
console.log(user.toString())
console.log(obj.toString()) 
//둘 다 같다는데 몬말인지 모르겠습니다


