interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Making' }
}

let tony = introduce();

console.log(tony.name);
// 교집합이 아니기 때문에 에러를 출력한다.
console.log(tony.skill);

// 타입 단언을 사용해서 타입 제한
if ((tony as Developer).skill) {
  console.log((tony as Developer).skill);
} else if ((tony as Person).age) {
  console.log((tony as Person).age)
}

// 타입 가드를 사용해서 타입 제한: true / false이 출력됨
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  tony.skill
} else {
  tony.age
}
