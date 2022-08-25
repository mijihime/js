console.log(Date())
console.log(typeof Date()) //string

let date = new Date()
console.log(date)
console.log(typeof date) //object
console.log(date.toLocaleDateString())

date = new Date('2022-08-23T07:27:30.999Z') // UTC + 9시간 = 한국시각
console.log(date)
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

console.log(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getUTCHours(),
    date.getHours(), //16
    date.getMinutes(), //27
    date.getSeconds(),
    date.getMilliseconds(), // 99
    date.getDay() // 2(0 ~ 6, 일 ~ 토)
)

console.log(date.getTime()) //Thu Jan 01 1970부터의 시간 1661239650999(miliseconds 단위)
console.log(Date.now())

date = new Date(0)
console.log(date)

date = new Date(1000 * 60 * 60 * 24)
console.log(date)

date = new Date(-1000 * 60 * 60 *24)
console.log(date)