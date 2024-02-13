// 인터페이스와 클래스 타입 비교
interface Developer {
  name: string;
  skill: string;
}

class Person {
  name: string;
}

var developer: Developer;
var person: Person;

// person = developer;
developer = new Person();

// 함수 예시
var add = function(a: number){
  // ...
}
var sum = function(a: number, b: number){
  // ...
}

// 구조적으로 더 많이 갖고 있는 함수를 더 작은 함수로 담는것은 가능하지만.
// 더 적게 갖고 있는 함수를 더 큰 함수로 담는 것은 불가능하다.
sum = add;

// 인터페이스 예시
interface Empty<T> {
  // ...
}

var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2
// empty2 = empty1

interface NotEmpty<T> {
  data: T;
}
