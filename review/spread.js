// spread.js

//...
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let arr3 = arr1; //깊은 복사, 얕은 복사
//arr3[0] = 10;
//console.log(arr1); // [10, 2, 3]

let arr4 = arr1.map((a)=> a);
let arr5 = [...arr1];
arr5[0] = 200;

console.log(arr4);
console.log(arr5);

let arr6 = [...arr1, ...arr2]; //length 6개
let arr7 = [arr1, ...arr2]; //length 4개
console.log(arr7[0][0]); // 1
console.log(arr7[0]); // [1, 2, 3]
console.log(arr7[1]); // 4
