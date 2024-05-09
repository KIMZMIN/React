// mysql.js
// mySql 연결 및 쿼리 실행 테스트

const mysql = require("mysql2");

const conn = {
    host: "192.168.0.13",
    port: "3306",
    user: "hr",
    password: "hr",
    database: "test",
    connectionLimit: 10
};

let pool = mysql.createPool(conn);

module.exports = pool;

//let connection = mysql.createConnection( "mysql://hr:hr@127.0.0.1:3306/test");
// console.log(connection);

// console.log("=================TABLE 조회=====================")
// connection.connect((err)=>{
//     if(err){
//         console.log("error connection" + err.stack);
//         return;
//     }
// });

// // 2. SQL 실행
// sql = "SELECT * FROM customer";
// connection.query(sql, function (err, results, fields) {
//     if(err) { console.log(err);

//     }
//     console.log(results);
// });

// connection.end();