console.log('array test');

const months = ['March', 'Jana', 'Febqqqqq', 'Decxczxczc'];

months.sort(); //글자길이: 긴 순서
console.log(months);
months.sort((a,b)=> a.length - b.length);   //글자길이: 짧은 순서
console.log(months);
