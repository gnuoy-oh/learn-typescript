// 생성자 함수
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

let capt = new Persion2("캡틴", 100);

// ** 생성자 함수 === 클래스 함수 **

// 생성자 함수에서 단순 문법만 바뀐 것..
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log("생성 되었습니다");
    this.name = name;
    this.age = age;
  }
}

let seho = new Person("세호", 30); // 생성 되었습니다.
