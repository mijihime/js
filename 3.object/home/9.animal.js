/* 과제:
다음 상속 관계로 디자인 하세요.
<life>
eat()
excrete()

<animal>
name
move()

<bird>   <mammal>
 name      name
 move()    move()
 --

 bird.eat().
 bird excrete.
 bird fly.
 mammal eat.
 mammal excrete.
 mammal run.
 */

life = {
    name: 'life',
    eat() {
        console.log(this.name, 'eat.')
    },
    excrete() {
        console.log(this.name, 'excrete.')
    }
}

animal = {
    name: 'animal',
    __proto__: life,
    move() {}
}

bird = {
    name: 'bird',
    move() {
        console.log(this.name, 'fly.')
    },
    __proto__: animal
}

let mammal = {
    name: 'mammal',
    move() {
        console.log(this.name, 'run.')
    },
    __proto__: animal
}

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()
