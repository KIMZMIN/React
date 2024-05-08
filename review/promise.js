// promise.js

/*
// call => time out
setTimeout( ()=>{
    console.log("time out"); // 순서 2
},3000) //한번실행

console.log("call"); // 순서 1
*/


//================ 1번째 방법 : then, catch ================
/*
// time out => call
function delay(){
    return new Promise((resolve, reject)=>{
        setTimeout( ()=>{
           console.log("time out"); // 순서 2
           resolve();
        },3000);
    }); //end of promise
};//end of delay()


delay()
    .then(() => console.log("call"))    //resolva
    .catch(() => console.log("error")); //reject
*/

//=============== 2번째 방법 : then, catch ================
function delay1(){
    return new Promise((resolve, reject)=>{
        setTimeout( ()=>{
           console.log("time out"); // 순서 2
           resolve();
        },3000);
    }); //end of promise
};//end of delay()

// time out => call
async function execDekay(){
    await delay1();     //await 빼면 call => time out
    console.log("call");
}
execDekay();
