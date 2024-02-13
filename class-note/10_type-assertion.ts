// 타입 단언(type assertion)
var a;
a = 20;
a = 'a';
var b = a as string;

//DOM API 조작
// <div>test</div>
// Type Assertion? as ???: 타입 스크립트보다 개발자 자신이 이 타입을 정확할게 있으니 이것으로 정의하겠다. 너는 건드리지 말어랏
let div = document.querySelector('div') as HTMLDivElement;
if(div){
  div.innerText;
}
