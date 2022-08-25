function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(1, 2))

//optional 변수
function add(a: number, b: number, isDouble?: boolean) {
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result: number = add(1, 2)
result = add(1, 2, true)
console.log(result)

//
function greet(name: string, nullable?: boolean) /*: string | null ->이렇게 쓰든가 생략하든가*/ {
    if(nullable) return null
    else return `Hellow, ${name}.`
}

let greeting = greet('joshua')
greeting = greet('joshua', true)
console.log(greeting)
