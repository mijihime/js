                      //excutorㄱ
let promise = new Promise((resolve, reject) =>  resolve('done')) //1번째는 약속이행, 2번째는 약속취소. (구문법)

/*               handlerㄱ: 둘 중 하나만 실행 되니 배타적
promise.then(console.log, console.log)
promise.then(console.log, null)

promise.then(console.log)
promise.catch(console.log) //resolve 되서 실행은 안됨
*/

// 과제 : 1초 뒤에, resolve 하도록 한다.
promise = new Promise((resolve, reject) => { // executor 즉각 실행자
    setTimeout(() => resolve('done'), 1000)
})

promise.then(console.log, console.log) // handler

//
/*
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

//error 객체가 handler의 parameter로 넘어온다.
promise.then(result => console.log(result),
    error => console.log(error)) 
*/
//
new Promise((resolve, reject) =>
    setTimeout(() => resolve('완성'), 2000))
    .then(console.log) // 완성
    .catch(e => console.log(e.message))
    .finally(() => console.log('promise가 생성되었습니다.'))

new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000))
    .then(console.log)
    .catch(e => console.log(e.message)) // 미완성
    .finally(() => console.log('promise가 생성되었습니다.'))

    //finally: 무조건 실행되게 하는거