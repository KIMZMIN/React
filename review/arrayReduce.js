
const array1 = [1, 2, 3, 4]; 

const initialValue = 0;
const sumWithInitial = array1.reduce(
    //(accumlator,currentValue) => { return accumlator + currentValue}, initialValue, 
    function (accumlator,currentValue){ 
        return accumlator + currentValue}, initialValue);
console.log(sumWithInitial);

let emps = [ { name: 'park', age: 20, point: 100},
             { name: 'choii', age: 26, point: 200},
             { name: 'kim', age: 10, point: 150}
 ];

let basePoint = 1000;
//const totalPoint = emps.reduce(합계계산 , 초기값);
const totalPoint = emps.reduce( 
    function(sum, value){return sum + value.point
    }, basePoint);
console.log(totalPoint);