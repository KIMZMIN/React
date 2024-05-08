
let arr = [1, 4, 9, 13];
let arr2 = arr.map((x) => x*2);
console.log(arr2);    // [ 2, 8, 18, 26 ]
console.log(arr2[0]); // 2

let emps = [ { name: 'park', age: 20},
        { name: 'choii', age: 26},
        { name: 'kim', age: 10}
 ];

let emps2 = emps.map( a => { 
    if(a.age >= 20){
        a.auth = true;
    } else{
        a.auth = false;
    }
    return a;
    });
console.log(emps2);

let emps3 = emps.map( a => {(a.age >= 20) ? a.auth = true : a.auth = false; return a});
console.log(emps3);
