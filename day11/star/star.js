// 사용자 입력 받기
let inputStr = prompt("출력할 별 갯수를 입력하세요.");
let input = Number(inputStr);
console.log("input:", input);

// 최대 별 개수 설정 (const 사용)
const maxStars = 10;

// 별 문자열 저장할 변수 (var 사용)
var stars = "";

// 별 출력 함수 선언 (기본값 = 1)
function printStars(count = 1) {
  let result = "";
  for (let i = 0; i < count; i++) {
    result += "*";
  }
  console.log(result);
}

// 유효한 입력을 받을 때까지 반복 (do while로 구성 가능)
while (true) {
  // 유효하지 않은 경우
  if (isNaN(input) || input < 1 || input > maxStars) {
    console.log(`Invalid input! Enter a number between 1 and ${maxStars}.`);
    inputStr = prompt("출력할 별 갯수를 다시 입력하세요."); // 재입력 받기
    input = Number(inputStr);
    continue; // 다음 반복
  }

  // 유효한 입력일 경우
  stars = input; // var로 저장
  printStars(stars); // 별 출력
  break; // 종료
}
