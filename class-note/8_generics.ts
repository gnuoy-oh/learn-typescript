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

//
function logText<T>(text: T): T{
  console.log(text);
  return text;
}

const str = logText<string>('하이');
str.split('');
const login = logText<boolean>(false);

// logText(19);
// const numb = logNumber(10);
