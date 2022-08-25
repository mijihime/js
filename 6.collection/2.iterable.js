let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },

    next() {
        if(this.current <= this.to)
            return {
                done: false, // done: itrating이 끝났다, true가 되면 멈춤
                value: this.current++
            }
        else
            return {
                done: true
            }
    }
}

for(let num of range) 
// for of를 하면 iterator를 뽑아내고 next를 반복 실행하게 하는게 iterating
// value값을 반복해서 let num(변수)에 뽑아냄
    console.log(num)

// 어떤 값을 반복적으로 뽑아내는 것, 위 보다 좀 더 최근문법
function* generator() {
    let val = 1
    while(val <= 3) yield val++
}

for(let num of generator())
    console.log(num)

let g = generator()
console.log(g, typeof g) // generator {[[GeneratorState]]: 'suspended'} object

//
function* gen() {
    yield* generator()
    yield* ['a', 'b']
    yield 9
}

for(let val of gen())
    console.log(val)