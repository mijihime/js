//2022-08-24 나만의 type
interface Profile {
    id: number
    username: string
    nickname: string
}

function printUsername(profile: Profile) {
    console.log(profile.username)
}

const profile: Profile = {
    id: 1,
    username: 'cain',
    nickname: 'hero'
}

printUsername(profile)

//
interface Relationship {
    from: Profile
    to: Profile
}

const relationship: Relationship = {
    from: {
        id: 1,
        username: 'cain',
        nickname: 'hero'
    },
    to: {
        id: 2,
        username: 'abel',
        nickname: 'warrior'
    }
}

//interface 상속
interface Account extends Profile {
    email: string
    password: string
}

// 과제: {} 안을 채워라. (data는 임의로 설정)
const accout: Account = {
    id: 2,
    username: 'abel',
    nickname: 'warrior',
    email: 'mjkwz814@naver.com',
    password: '1234'
}

//optional
interface User {
    id: number
    username: string
    photoUri?: string
}

let user: User = {
    id: 1,
    username: 'abel'
}

user = {
    id: 1,
    username: 'abel',
    photoUri: 'face.jpg'
}

console.log(user)

// method로도 선언가능
interface Shape {
    getArea(): number
    getPerimeter(): number
}

//객체에 바로 쓰는건 의미없고  class에 한다고 함
class Circle implements Shape {
    constructor(private radius: number) {}

    getArea() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    getArea() {
        return this.width * this.height
    }

    getPerimeter() {
        return 2 * (this.width + this.height)
    }
}

const circle = new Circle(4) // 4는 radius 값
const rectangle = new Rectangle(4, 6)

console.log(circle.getArea(), rectangle.getPerimeter())