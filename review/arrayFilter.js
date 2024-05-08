
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word)=> word.length > 6);
console.log(result);

let emps = [ { name: 'park', age: 20},
        { name: 'choii', age: 26},
        { name: 'kim', age: 10}
 ];

 //age가 20이상인 회원만 필터링
 const result1 = emps.filter((emp)=> emp.age >= 20);
 console.log(result1);