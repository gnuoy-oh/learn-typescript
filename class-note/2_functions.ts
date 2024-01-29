// 함수의 파라미터에 타입을 정의하는 방식
function sum(a: number, b: number){
  return a + b;
}
sum(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number{
  return 10;
}

// 함수에 타입을 정의하는 방식
function sumAll(a: number, b: number): number{
  return a + b;
}
// 파라미터 개수보다 많이 선언할 경우 에러가 출력된다.
// sumAll(10, 20, 30, 40);
sumAll(10)

// 함수의 옵셔널 파라미터 (선택적 파라미터)
function log(a: string, b?: string){
  console.log(a);
  console.log(b)
}

log('hello workd');
log('hello ts', 'abc');
