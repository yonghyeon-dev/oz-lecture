// 상수 선언 - 최대 점수
const maxScore = 100;

// 점수 입력 받기 (문자열로 들어오기 때문에 숫자로 변환 필요)
let input = prompt("점수를 입력하세요.");
let score = Number(input); // 문자열 → 숫자 변환

// 유효성 검사 - 숫자가 아니거나 0~100 범위가 아니면 종료
if (isNaN(score) || score < 0 || score > 100) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
} else {
  // 점수 1점 증가 (단항 산술)
  score++;

  // 점수 10% 증가 (복합 대입 연산자)
  score *= 1.1;

  // 점수 보너스 5점 추가 (복합 대입 연산자)
  score += 5;

  // 점수 100점 초과 시 제한 (연산자 우선순위 고려)
  if (score > 105) {
    score = 105;
  }

  // 최종 점수 반올림
  let finalScore = Math.round(score);

  // 등급 변수 선언 (var로)
  var grade;

  // 등급 판단 (if, else if, else 사용)
  if (finalScore >= 100) {
    grade = "S";
  } else if (finalScore >= 90) {
    grade = "A";
  } else if (finalScore >= 80) {
    grade = "B";
  } else if (finalScore >= 70) {
    grade = "C";
  } else if (finalScore >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  // 삼항 연산자로 Pass / Fail 판단
  let status = finalScore >= 60 ? "Pass" : "Fail";

  // 메시지 출력 (switch 사용)
  let message;
  switch (grade) {
    case "S":
      message = "Super!!";
      break;
    case "A":
      // 등급은 A인데 점수가 정확히 100점이면 메시지 변경
      message = finalScore === 100 ? "Perfect Score!" : "Excellent work!";
      break;
    case "B":
      message = "Good job!";
      break;
    case "C":
      message = "Satisfactory performance.";
      break;
    case "D":
      message = "Needs improvement.";
      break;
    case "F":
      message = "Please try harder!";
      break;
    default:
      message = "Unknown grade.";
  }

  // 결과 출력
  console.log("Final Score: " + finalScore);
  console.log("Grade: " + grade);
  console.log("Status: " + status);
  console.log("Message: " + message);
}
