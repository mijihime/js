let set = new Set()

let user1 = {name: 'john'}
let user2 = {name: 'pete'}

set.add(user1).add(user2).add(user1) //중복 여러개로 안나옴
console.log(set)

console.log(set.size)
console.log(set.has(user1), set.has(user2), set.has({}))// has를 통해 특정 value가 있는지 확인 가능

console.log(set.delete(user1))
console.log(set)

//
set.add(user1)

for(let user of set) console.log(user) //for of~ :iterating 할 때 이걸 많이 씀

set.forEach(val => console.log(val))

//
set = new Set([1, 2, 3])
console.log(set)

//
let arr = Array.from(set)
console.log(arr)

set = new Set('hello') //중복되는 l이 제거됨
console.log(set)