let user = {
    name: 'frances',
    age: 70
}

//let user = {} object를 표현하는 문법 안에 key(symbol type, string type), value(any type) 으로 구성된다.

user = {
    name: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
} //4가지의 속성을 가지고 있음.

//.을 써서 이어가는걸 chainning 기법
console.log(user.name)
console.log(user.name.first)

user.sing()

//user.'nick name'
//user.nick name
//key가 string type일 경우 괄호를 사용하고, string type이 아닌 상태서 쓴다고 할 때도 ''를 써서 
//string type처럼 보이게
console.log(user['nick name'])
console.log(user['name']['first'])

user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age)


//[]를 써서 변수로 만든다.
let key = 'nick name'
console.log(user[key])
key = 'age'
console.log(user[key])

let man = {
    name: 'samuel',
    1: 'one',
    2: 'two'
}

//man.1
//숫자가 아니라 string '1'이기 때문에
console.log(man['1'])