// commonjs Module ===> node.js 사용하는 방식

//1. myArray Module -> import
const totalPoint = require("./myArray.js");
//2. 함수 실행
let result = totalPoint();
console.log(result);
