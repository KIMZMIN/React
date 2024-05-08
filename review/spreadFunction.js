// spreadFunction.js

// hap(10, 20, 30, 40, 50, 60);

// function hap (a, b,  ...rest){
//     console.log(a);         // 1번째값   => 10
//     console.log(b);         // 2번째값   => 20
//     console.log(rest);      //그 외 나머지 => [30, 40, 50, 60]
//     console.log(rest[0]);   //그 외 나머지의 1번째 30
// }

function hap(a, ...rest){
    return rest.reduce((sum, value) => sum + value, a)
};

function hap1(a, ...rest){
    let total = a;
    for(value of rest){
        total = total + value;
    }
    return total;
}

console.log(hap(10,20,30,40));  // 100
console.log(hap1(10,20,30,40)); // 100

// ================ p.7 구조분해할당 ====================
let emps = [ { name: 'park', age: 20, point: 100 },   // 1
             { name: 'choii', age: 26, point: 200 },  // 2
             { name: 'kim', age: 10, point: 150 }     // 3
 ];

let [emp1, ...rest] = emps;  // [1, [2, 3]]

/* 
//사원의 이름
console.log(emp1.name);     //park
console.log(rest[0].name);  // choii
//object 분해
const {name, age} = emp1;
console.log(name); //park
//rest 
let {point} = rest[0]; 
console.log(point); //200 
*/

//const obj = { name1: 'park', age: 20, point: 100 };
//obj.name1 ---> name1

const {name1} = { name1: 'park', age: 20, point: 100 };
console.log(name1);


const [a,b, ...c] = [1,2,3,4,5,6,7];
//arr[0] -> a
console.log(a); // 1
console.log(c); // [ 3, 4, 5, 6, 7 ]
