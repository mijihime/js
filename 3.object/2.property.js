let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

delete user.weight
console.log(user.weight)

console.log('height' in user) // user 안에 유무를 따져 ture, false로 나옴
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.name = 'parker'
console.log(Object.keys(user)) //key
console.log(Object.values(user)) //value
console.log(Object.entries(user)) //터미널로 출력하면 key, value로 나옴

//
user = {
    greet: function() {console.log('hello')}
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
//console.log(user.city.name) TypeError: Cannot read properties of undefined (reading 'name')
console.log(user.city?.name) //undefined

//
let street
//street = user.city.street
street = user?.city?.street
console.log(street)
street = user?.city?.street ?? 'where'
console.log(street)

//user?.address = 'sejong' SyntaxError: Invalid left-hand side in assignment - 할당연산자 오른편에만 optional chainning 사용 가능

user = null
//user.greet()
console.log(user?.greet) //undefiend
user = undefined
//user.greet() 위 아래 둘 다 값이 없기 때문에 undefiend 에러 뜸
console.log(user?.greet)

//
user = {}
//user.greet()
console.log(user.greet?.()) // function이 붙든 뭘 붙든 greet에 값이 없으면 undefiend
