/* fssync.js
동기식 = 블록킹 함수
*/

const fs = require("fs"); //html <script src='xxx.js'>
let data = fs.readFileSync("test.txt", "utf8"); //sync => await 처럼 다 끝나야 넘어감
console.log(data);
console.log("the end");

//hello => the end