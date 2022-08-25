//변수는 데이터 타입이 없어 문자, 숫자 등 다양하게 받을 수 있다.
//하지만 literal은 데이터 타입이 있다.

let foo = "I am a string."
foo = 'So am I' 
foo = `back tick` //string은 큰따옴표, 작은따옴표, backtick 둘 다 의미한다.

foo = 1
foo = 1.0 // int와 float은 다 number

console.log(1 / 0)
console.log('a' / 1) //NaN(Not a Number) 에러가 아니라 숫자가 아니란 뜻

foo = 1
console.log(isFinite(foo)) //숫자이면 true가 나옴
foo = 'a'
console.log(isFinite(foo)) //숫자가 아니라 false가 나옴

foo = '1' //isFinite을 하면 false가 나오지만 숫자로 바꿀 수 있음
console.log(isFinite(foo) / 1)

foo = 'a'
foo = '100px' //숫자로 잘 바뀜
foo = '+1'
foo = '-1'
foo = '123456-789123' //하이픈 앞까지만 숫자로 인식

console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo)) //내림처리
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN
console.log(a)

foo = 1n //16자 이상 숫자 표현

const okay = true
const fail = false //boolean type

let val = null

let val2
val2 = undefined
console.log(val2)

let id = Symbol('id')
console.log(typeof id) //id의 변수의 값의 타입을 보여준다.

val = 1
val = String(val) // number를 string type으로 변환
console.log(typeof val) 

val = '6' / '2'
console.log(val) //number로 캐스팅 된 후 나눠짐

val = false / true
console.log(val) //false는 0, true는 1로 나뉘게 됨

val = '1'
val = Number(val)
console.log(typeof val) //자동 캐스팅

console.log(Number('1'), Number(true)) //둘 다 Number라는 펑션을 거치면 1이 됨
console.log(Number(' '), Number(''), Number(null), Number(false)) // 0으로 바뀜
console.log(Number('a'), Number(undefined), Number(NaN)) // NaN

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) //true로 나오는 것들, 값이 있으니 true임
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN)) //값이 있다 없다로 판단

