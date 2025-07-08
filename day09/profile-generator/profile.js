// --------------------------
// 변수 선언 및 데이터 타입
// --------------------------

// var: number 타입
var myAge = 38;
console.log("Variable myAge is:", typeof myAge); // number

// let: string 타입
let myName = "CYH";
console.log("Variable myName is:", typeof myName); // string

// const: boolean 타입
const isStudent = true;
console.log("Variable isStudent is:", typeof isStudent); // boolean

// --------------------------
// 문자열 처리
// --------------------------

// 이스케이프 문자 사용 (\n, \t)
let intro = "이름:\t" + myName + "\n나이:\t" + myAge;
console.log(intro);

// 문자열 연결
let sentence =
  "Hello, my name is " + myName + " and I am " + myAge + " years old.";
console.log(sentence);

// --------------------------
// 배열 리터럴
// --------------------------

let hobbies = ["reading", "gaming", "coding"];
let hobbiesText = "My hobbies: " + hobbies.join(", ");
console.log(hobbiesText);

// --------------------------
// 객체 리터럴
// --------------------------

let profile = {
  name: "CYH",
  age: 38,
  isStudent: true,
};

let profileText =
  "Name: " +
  profile.name +
  ", Age: " +
  profile.age +
  ", Student: " +
  profile.isStudent;
console.log(profileText);

// --------------------------
// typeof 사용
// --------------------------

console.log("Type of hobbies:", typeof hobbies); // object (배열도 object)
console.log("Type of profile:", typeof profile); // object

// --------------------------
// 도전 과제: null vs undefined
// --------------------------

let unknownValue = undefined;
let emptyValue = null;

console.log("Type of undefined:", typeof unknownValue); // undefined
console.log("Type of null:", typeof emptyValue); // object (JS 언어적 특징)

console.log("Are null and undefined equal (===)?", emptyValue === unknownValue); // false

// --------------------------
// 도전 과제: 템플릿 문자열
// --------------------------

let templateString = `Name: ${myName}, Age: ${myAge}, Student: ${isStudent}`;
console.log(templateString);

// --------------------------
// 도전 과제: 배열 내 null/undefined 처리
// --------------------------

let mixedArray = ["music", null, undefined];
mixedArray.forEach((item, index) => {
  console.log(`Element ${index} type:`, typeof item);
});

// --------------------------
// 도전 과제: 객체 속성 추가 및 null 확인
// --------------------------

profile.email = null;
if (profile.email === null) {
  console.log("Email is null.");
}
