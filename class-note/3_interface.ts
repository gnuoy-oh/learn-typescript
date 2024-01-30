interface User {
  age: number;
  name: string;
}

// ** 변수에 인터페이스 활용
let seho: User = {
  age: 33,
  name: "seho"
};

// ** 함수에 인터페이스 활용
function getUserAny(user) {
  console.log(user);
}

// 이 기준으로 getUserAny는 any타입으로, 어떤 타입을 넣어도 허용한다.
getUserAny();

// 이 기준은 User 인터페이스의 규칙을 적용했으므로, 규칙에 맞게 인자를 넣어주어야 한다.
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 100
};

getUser(capt);

// ** 함수의 구조(스펙)에 인터페이스를 활용
interface SumFunction {
  // (a: number, b: number) -> 파라미터의 타입을 정의한다.
  // (a: number, b: number): number -> 함수의 리턴 값 타입을 정의한다.
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// ** 인덱싱(배열)에 인터페이스를 활용
interface StringArray {
  // index: number -> 배열의 인덱스 타입을 정의한다.
  // [index: number]: string -> 배열의 인덱스 값을 정의한다.
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];

// 배열의 값을 숫자로 정의하면 에러를 발생한다.
// arr[0] = 10;

// ** 딕셔너리 패턴에 인터페이스를 활용
interface StringRegexDictionary {
  // [key: string] -> 객체의 속성 타입을 정의한다.
  // [key: string]: RegExp -> 객체의 값 타입을 정의한다.
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/
};

// cssFile에 string 타입을 할당하면 에러를 발생한다.
// obj['cssFile'] = 'a'

Object.keys(obj).forEach(function (value) {
  // ...
});

// ** 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  language: 'Typescript',
  age: 100,
  name: 'captain'
};
