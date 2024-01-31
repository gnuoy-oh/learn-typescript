// 1
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }

  if (typeof value === "string") {
    value.toString();
  }

  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(10);

// 2
interface DeveloperSecond {
  name: string;
  skill: string;
}

interface PersonSecond {
  name: string;
  grade: number;
}

function askSomeone(someone: DeveloperSecond | PersonSecond){
  // someone.name;
  // someone.grade;
  // someone.skil;
}
askSomeone({name: '디벨로퍼', skill: '디벨로퍼'});
askSomeone({name: '캡틴', grade: 100});

function askSomeoneInter(someone: DeveloperSecond & PersonSecond){
  // console.log(someone.name);
  // console.log(someone.grade);
  // console.log(someone.name);
}

// 합집합: 인터셉션은 새로운 하나의 타입, 인터페이스를 만들어 낸다,
askSomeoneInter({name: '디벨로퍼', skill: '웹 개발', grade: 100});
askSomeoneInter({name: '캡틴', grade: 100, skill: '디자인'});

let shgo: string | number | boolean;
let oh: string & number & boolean;
