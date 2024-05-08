// moduleArray.js

let emps = [ { name: 'park', age: 20, point: 100},
             { name: 'choii', age: 26, point: 200},
             { name: 'kim', age: 10, point: 150}
 ];

 //emps의 potint 필드의 합계
export function totalPoint(){
   let basePoint = 0;
   return emps.reduce((sum, val)=> sum + val.point, basePoint);
    
};