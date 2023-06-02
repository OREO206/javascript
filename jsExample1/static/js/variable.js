// document html 화면에 나타나게 함
for(let i = 0; i < 10; i++) {
    // console.log(i);
    document.write(i);
    document.write("<br />");
}

// let은 변경 가능
let str1 = "Korea";
str1 = "Seoul";
console.log(str1);

// const는 상수 개념이라 error 뜸
const str2 = "Korea2";
str2 = "Seoul2";
console.log(str2);

// 100,200을 더하는 메소드 만들기 : return
// 출력 따로 처리
function sum(num1, num2) {
    return num1 + num2;
}

// 메소드 출력하는 1번째 방법
console.log("--------------");
console.log(sum(num1, num2));
console.log("--------------");

// 메소드 출력하는 2번째 방법
let result = sum(1, 2);
console.log(result);

// 메소드 출력하는 3번째 방법
let result2 = function add(num1, num2) {
    return num1 + num2;
}

// 메소드 출력하는 4번째 방법
// 화살표 함수
let testAdd = (num1, num2) => {
    return num1 + num2;
}