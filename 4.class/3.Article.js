class Article {
    static publisher = 'ddanzi' //속성값을 넣고 싶다: publisher
    //static은 class에 필드추가

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }
}


console.log(Article.publisher)

//
Article.address = 'seoul'
console.log(Article.address)

Article.getPrice = () => 2000
console.log(Article.getPrice())

//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))

// 과제: [Symbol.toPrimitive]() 를 추가하라.
console.log(`${article1}`)
console.log(article1 + '')

//
console.log(article1.publiser, article1.address, article1.compare)
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(Article))
console.log(Article.prototype)
console.log(Object.keys(article1))

//
let articles = [article1, article2]
console.log(articles)

articles.sort(Article.compare) // a - b는 오름차순
console.log(articles)

Article.compare = (a, b) => b - a
articles.sort(Article.compare) //parameter로 fn을 넣어줘야 하는데 b - a는 내림차순
console.log(articles)