// JS 문자열 선언
let strJs = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heros: Array<string> = ['Capt', 'Thor', 'Hulk', 10];
let items: number[] = [1, 2, 3];

// TS 튜플
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {}
let person: object = {
  name: 'oh',
  age: 20
}
// 위와 동일한 내용 (좀 더 구체적으로 정의 )
let person2: {name: string, age: 20} = {
  name: 'oh',
  age: 20
}

// TS 진위값
let show: boolean = true;
