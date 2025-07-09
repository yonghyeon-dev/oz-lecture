let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log("isMathLowAvg", isMathLowAvg);

let isEnglishLowAvg = english < avg;
console.log("isEnglishlowAvg", isEnglishLowAvg);

console.log(isMathLowAvg && isEnglishLowAvg);

console.log()