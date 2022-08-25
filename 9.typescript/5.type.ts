type Man = {
    name: string
}

const man: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name: 'neo'}]

//
type Color = 'red' | 'green' | 'blud'
let color: Color = 'red'
//color = 'yellow'

// 확장
type Employee = Man & {
    job: string
}

const employee: Employee = {
    name: 'miji',
    job: 'singer'
}