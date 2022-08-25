//2022-08-24
new Promise((resolve, reject) => {throw new Error(1)}) 
    .catch(e => console.log(e.message)) //try의 catch구문과 비슷함. error를 잡아 먹어 치움

new Promise((resolve, reject) => reject(new Error(2)))
    .catch(e => console.log(e.message))

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(e.message))

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla())
    .catch(e => console.log(e.message))

new Promise((resolve, reject) => {throw new Error(4)})
    .catch(e => console.log(e.message)) // catch가 마지막이 아니라면, 다음걸 또 실행 함. 
    .then(result => console.log(result)) 

new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {
        if(e instanceof URIError) {}
        else {
            console.log(e.message) // 5
            throw e
        }
    }).then(() => console.log('여기서는 실행되지 않습니다.'))
    .catch(e => console.log(e.message)) // 5