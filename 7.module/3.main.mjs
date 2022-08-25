import {greet, add} from './1.named.mjs' //있는 그대로 들고옴
import * as named from './1.named.mjs' //별명지어 들고옴
import div from './2.default.mjs'

console.log(greet, add(1, 2))
console.log(named.greet, named.add(1, 2))

console.log(div(4, 2))