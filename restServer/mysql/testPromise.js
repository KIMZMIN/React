// testPromise.js

const mysql = require("./index");

const selectAll = async ()=>{ //화살표함수로 바꾸면 이런식
//async function selectAll(){
    const sql = "select * from customer";
    const result = await mysql.query(sql);
    console.log(result);
};

async function selectInfo(id){
    const sql = "select * from customer where id=?"
    const values = id;
    const result = await mysql.query(sql, values);
    console.log(result);
}

//selectAll(); //hoisting 화살표함수일땐 밑에서 호출해야함.
//selectInfo(2);


