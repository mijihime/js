function makeFn() {
    let name = 'parker'

    function displayName() { //function이기 때무넹 바로 값 할당
        console.log(name)
    }

    return displayName
}

let myFn = makeFn()
myFn()