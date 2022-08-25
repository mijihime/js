let age

function src() {
    let user = {
        name: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12
    console.log(user)
}

function b(user) { 
    console.log(Object.keys(user)) // a에서 넣은 symbol을 감지할까?를 확인. symbol은 감추는 속성이기 때문에
    console.log(user.name)
    console.log(user)
}

src()