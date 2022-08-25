let val = 1 + 2 * 3 / 2
console.log(val, 5, 4**2, 4**(1/2)) // 마지막 2분의1은 루트

let i = 1
console.log(++i, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)

console.log(1 + '2') //하나는 숫자, 하나는 문자이기에 숫자를 문자로 인식해서 붙이기함
console.log(1 + '2', '1' + '2') //역시 붙이기

//unary plus operator
console.log(1 + +'2') //하도 많이써서 +를 붙이면 더하기로 바꿔줌

console.log(1 || 0, 0 || 1) //true, false로 바뀜 연산자는 마지막으로 읽은 값을 리턴함
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)

// foo && do(foo) foo가 값이 있으면 do라는 function을 call하는 것
//bar = baz || createrBar()  baz에 값이 있다면 createrBar가 실행 됨

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d += 2
console.log(d)

console.log()
console.log('2' > 1, '01' == 1, false == 0, '' == false) // plus 연산자 빼고는 문자가 숫자로 잘 캐스팅이 됨.
console.log(true > 1) //현재는 type이 달라도 true, false가 나옴

//equivalent
console.log(1 == '1', 1 != '1') //type을 따지지 않고 content를 따짐

//identical
console.log(1 === '1', 1 !== '1') //일단 type부터 같아야함

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A') 
//unicode로 비교, 두 글자 이상 될 때 앞글자부터 비교, 글자 수 길이, 대/소문자 유니코드

console.log(null > 0, null < 0, null >= 0, null == 0)
console.log(undefined > 0, undefined >= 0, undefined == 0)//정의 한 적 없을 때를 undifined
console.log(NaN > 0, NaN >= 0, NaN == 0)
console.log(undefined == undefined, null == null, NaN == NaN)