//후치연산
let increment = 10;
console.log("1", increment);
increment++;
console.log("2", increment);
console.log("3", increment++);
console.log("4", increment);

let decrement = 10;
console.log(";dec1", decrement);
decrement--;
console.log("dec2", decrement);
console.log("dec3", decrement--);
console.log("dec4", decrement);

//전치연산

let incFirst = 10;
console.log("incFirst 1", incFirst);
++incFirst;
console.log("incFirst 2", incFirst);
console.log("incFirst 3", ++incFirst);
console.log("incFirst 4", incFirst);

let decFirst = 10;
console.log("decFirst 1", decFirst);
--decFirst;
console.log("decFirst 2", decFirst);
console.log("decFirst 3", --decFirst);
console.log("decFirst 4", decFirst);

//단항 부정 연산자
let num = -10;
num = -num;
console.log("-(-10)", num);

let num2 = 10;
num2 = -num2;
console.log("-(10)", num2);

let num3 = 10;
-num3;
console.log(num3);
