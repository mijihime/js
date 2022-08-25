let arr = ['ilya', 'knator']
let [name, surname] = arr //배열은 아니고 배열의 모양
console.log(name, surname)

let [one, two] = [1, 2, 3]
console.log(one, two)

let [three, four] = [3]
console.log(three, four);

[one, , three] = [1, 2, 3, 4]
console.log(one, three)

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c)

//
i = s.split(' ') //문자를 배열로 바꾼다. <-> 배열을 문자로 바꾼다: join
console.log(i);

[a, b] = i
console.log(a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ')
console.log(user)

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(entries)

for(let [key, value] of entries) console.log(key, value)

//
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, value] of map) console.log(key, value)

// a, b  값 바꾸기(예전에 tmp사용해서 바꿨는데 이렇게 가능함)
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin);

//
[one, two, ...rest] = [1, 2, 3, 4]
console.log(one, two, rest);

//
[name, surname='annonymous'] = ['john'] 
console.log(name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options //오른쪽에 배열이 아닌 객체를 주는 거, 객체를 쓸 땐 왼쪽에 [] 말고 {}씀
console.log(title, height, width);

({title, height, width} = options)

let {width: w, height: h} = options //이름? 바꿀 때
console.log(w, h);

let {title: t, ...other} = options
console.log(t, other) //t 말고 객체형태로 other에 들어감. 저 위쪽 어딘가 뭐는 배열이어서 찾아봐야함

let {title: subject, wide=1000} = options
console.log(subject, wide);

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extar: true
}

// 과제: bread에서 size와 items를 뽑아내라.
let {size, items} = bread
console.log(size, items)

//
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items: [item1, item2]}){
    console.log(name, item1, item2)
}

showMenu(menu)