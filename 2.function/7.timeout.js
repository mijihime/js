//2022-08-12
function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) // 첫 번째 들어오는 function을 큐에 넣고 지정한 시간 이후 큐에서 꺼내 출력

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'konx')

//
let timeId = setTimeout(() => console.log('hoo'), 3000);
clearTimeout(timeId)
