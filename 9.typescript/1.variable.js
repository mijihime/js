//2022.08.24 js 위에 ts를 얹힌거라 컴파일이 js로 돼, node.js에 나타남
var msg = 'hello';
// msg = 1 -> string이 아니라서 에러
var val = 1;
var nuallableStr = null; // type을 여러개 설정 가능
nuallableStr = 'hi';
// nuallableStr = undefined
// 개발하는 과정에서 미리 오류를 내주기 때문에 ts 을 애용하는 경우가 있음.
var undefinedOrNumber;
undefinedOrNumber = 10;
undefinedOrNumber = undefined;
var numberOrStringOrNull = null;
numberOrStringOrNull = 1;
numberOrStringOrNull = 'Bye';
numberOrStringOrNull = null;
var isCompleted = true;
isCompleted = false;
// isCompleted = 0 -> 당연히 안됨
var anyValue = null; //이럴거면 ts 쓸 필요는 없음.
anyValue = undefined;
anyValue = 1;
anyValue = 'hello';
// type을 컴파일러가 알아서 정하겠다. 권장하진 않음.
var a = 1;
var b = 'b';
var c = true;
