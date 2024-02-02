// ** 기존 함수 선언 방식
// function logText(text){
//   console.log(text);
//   return text;
// }

// logText(10); //숫자 10
// logText('하이'); //문자열 하이
// logText(true); //진위값 true

// ------------------------------------

// ** 제너릭 기본
// function logText<T>(text: T): T{
//   console.log(text);
//   return text;
// }

// logText<string>('하이');

// ------------------------------------

// ** 아래와 같이 string 과 number 를 각각 함수를 만들었을 때, 중복되는 불필요한 경우가 발생한다.

// function logText(text: string){
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number){
//   console.log(num);
//   return num;
// }

// logText('하이');
// logText(19);
// const numb = logNumber(10);

// ------------------------------------

// ** 유니온 방식으로 개선할 수 있으나, 두 가지에서 사용할 수 있는 내장 API 가 모두 뜨거나, 스트링 인자를 넣었을 때 에러가 출력되는 이슈가 있다.
// function logText(text: string | number){
//   console.log(text);
//   return text;
// }

// const a = logText('하이');
// logText(19);
// logText(19);
// const numb = logNumber(10);

// ------------------------------------

// ** 함수에 제너릭을 선언하는 방법
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("하이");
str.split("");
const login = logText<boolean>(false);

// logText(19);
// const numb = logNumber(10);

// ------------------------------------

// ** 인터페이스에 제너릭을 선언하는 방법
interface Dropdown {
  value: string;
  selected: boolean;
}

const obj: Dropdown = { value: "abc", selected: false };

interface DropdownGene<T> {
  value: T;
  selected: boolean;
}

const objGene: DropdownGene<number> = { value: 30, selected: false };

// ------------------------------------

// ** 제네릭의 타입 제한 (추론) - 1

// T[]과 같이 타입에 추가로 힌트를 줄 수 있다.
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(["hi", "abc"]);

// ** 제네릭의 타입 제한 (추론) - 2: 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLimit<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLimit("hoho");
logTextLimit(199);

// ** 제네릭의 타입 제한 (추론) - 3. keyof 예약어를 사용해서 제네릭 타입 제한
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");
