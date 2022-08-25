//2022.08.24 promise의 new 문법
async function f() {
    return 1
}
f().then(console.log) // 1

f = async function() {
    return Promise.resolve(2)
}
f().then(console.log) // 2

f = async function() {
    return Promise.reject(new Error(3))
}
f().catch(e => console.log(e.message))

//await: promise가 끝나기를 기다리는 명령문
f = async function() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(4), 1000)
    })
    let result = await promise // 다음할당문을 하지 않고 기다림
    console.log(result)
}
f() // 4

//
class Waiter {
    async wait() {
        return await Promise.resolve('cooked.')
    }
}
new Waiter().wait().then(console.log)





