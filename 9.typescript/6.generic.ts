//2022-08-24
function wrap<T>(value: T): T {
    return value
}

const output = wrap('hello')
console.log(output)

//
interface Woman {
    name: string
}

const woman: Woman = {name: 'hera'}
const woman2 = wrap(woman)
console.log(woman2)

//interface에서도 generic 가능
interface Item<T> {
    id: number
    data: T
}

interface Animal {
    name: string
}

interface Place {
    location: string
}

const animalItem: Item<Animal> = {
    id: 1,
    data: {
        name: 'cat'
    }
}

const placeItem: Item<Place> = {
    id: 2,
    data: {
        location: 'seoul'
    }
}

// class에서 generic type
type Product<T> = {
    id: number
    data: T
}

class Queue<T> {
    list: T[] = []

    get length() {
        return this.list.length
    }

    enqueue(item: T) {
        this.list.push(item)
    }

    dequequ() {
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)

let val = queue.dequequ()
val = queue.dequequ()
console.log(val)
