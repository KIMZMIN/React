// mysql => test.js

const {pool} = require("./index");
//selectAll();
//selectInfo();
//insert();
//update();
//del();

//전체조회
function selectAll(){
    sql = "SELECT * FROM customer";
    pool.query(sql, function (err, results) {     
        if(err) { console.log(err);}
        console.log(results);
        //res.send(results); 
    });    
};

//단건조회
function selectInfo(){
    const sql = "SELECT * FROM customer where id=?"
    const id = 2;
                  //[id, name] < 여러개일때.
    pool.query(sql, id, (err, result)=>{  //1: query, 2: ? 값, 3: 콜백함수(err, result)
        if(err){console.log(err)};
        console.log(result);
    });
};

//등록
function insert(){
    const sql = "insert into customer set ?";
    const customer = {id:'33', name:'33', email:'333@zzz.com', phone:'010-3333-3333', address:'33-3'};
    pool.query(sql, customer, (err, result)=>{  //1: query, 2: ? 값, 3: 콜백함수(err, result)
        if(err){console.log(err)};
        console.log(result);
    });
};

//수정
function update(){
    const sql = "update customer set ? where id=?"
    const customer = {email:'99999@qqqq.com', phone:'010-9999-9911'}
    const id = 2;
    pool.query(sql, [customer, id], (err, result)=>{
        if(err){console.log(err)};
        console.log(result);
    });
};

//삭제
function del(){
    const sql = "delete from customer where id=?"
    const id = 33;
    pool.query(sql, id, (err, result)=>{
        if(err){console.log(err)};
        console.log(result);
    });
};