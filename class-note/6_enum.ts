// 초기화를 하지 않으면 초기값은 0이다.
enum Shoes {
  Nike = "나이키",
  Adidas = "아디다스"
}

let myShoes = Shoes.Nike;

console.log(myShoes); // 초기값(0) -> 나이키

// 2
enum Answer {
  Yes = "Y",
  No = "N"
}

function askQuestion(answer: Answer) {
  if (answer == Answer.Yes) {
    console.log("정답입니다.");
  }
  if (answer == Answer.No) {
    console.log("오답입니다.");
  }
}

askQuestion(Answer.Yes);
askQuestion("Yes");
