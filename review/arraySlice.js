// arraySlice.js

let emps = [ { name: 'park', age: 20, point: 100},
             { name: 'choii', age: 26, point: 200},
             { name: 'kim', age: 10, point: 150}
 ];


 let a = emps.slice(0); /*[
                            { name: 'park', age: 20, point: 100 }, 
                            { name: 'choii', age: 26, point: 200 },
                            { name: 'kim', age: 10, point: 150 }   
                         ]*/
 let b = emps.slice(1); /*[ 
                            { name: 'choii', age: 26, point: 200 },
                            { name: 'kim', age: 10, point: 150 }   
                        ]*/
 let c = emps.slice(2);  /*[ 
                             { name: 'kim', age: 10, point: 150 }   
                         ]*/
 let d = emps.slice(0, 2); // 0부터 2개
 console.log(d);