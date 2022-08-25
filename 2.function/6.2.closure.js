const age = 16

//sayAge() - sayAge is not defined
//tellAge()

function init() {
    let age = 10

    function sayAge() {
        console.log(age) //function안에 있으면 global에 생기지 않고 local에 생김
    }

    let tellAge = function(){
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()
//sayAge()
//tellAge()