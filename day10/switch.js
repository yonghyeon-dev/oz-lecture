let food = "melon";

switch (food) {
  case "apple":
  case "melon":
  case "cherry":
  case "banana":
    console.log("fruit");
    break;

  default:
    console.log("not found");
    break;
}

/////////////

let score = 90;
let grade;
if (score >= 90 && score <= 100) {
  grade = "A++";
}

console.log("grade", grade);
