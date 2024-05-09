// node-projext > app.js


const express = require("express");
const pool = require("./mysql");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hellooooo world...")
});

//전체조회 | Get |
app.get("/customer", (req,res)=>{

    sql = "SELECT * FROM customer";
    pool.query(sql, function (err, results, fields) {     
        if(err) { console.log(err);
      
        }
      console.log(results);
      res.send(results); 
    });    
});


//단건 조회 path variable | Get | => req.params
app.get("/customer/:no", (req,res)=>{
    const no = req.params.no;

    sql = `SELECT * FROM customer where id=${no}`;
    pool.query(sql, function (err, results, fields) {     
        if(err) { console.log(err);
      
        }
      console.log(results);
      res.send(results); 
    });    

});

//등록 Post | Boomerang : formdata => req.body 
app.post("/customer", (req,res)=>{
    const id = req.body.id;
    const n = req.body.name;
    const e = req.body.email;
    const p = req.body.phone;
    const a = req.body.address;
    sql = `insert into customer set 
           id=${id}, name=${n}, email=${e}, phone=${p}, address=${a}`;
    pool.query(sql, function (err, results, fields) {     
        if(err) { console.log(err);
          
        }
      console.log(results);
      res.send({...req.body}); 
      res.send(results); 
    });    
});

//수정 PUT |  json(parameter) => req.body
app.put("/customer/:id", (req,res)=>{
    const id = req.params.id;
    const n = req.body.name;
    const e = req.body.email;
    const p = req.body.phone;
    const a = req.body.address;
    sql = `update into set 
           name=${n}, email=${e}, phone=${p}, address=${a}
           where id=${id}`;
    pool.query(sql, function (err, results, fields) {     
        if(err) { console.log(err);
          
        }
      console.log(results);
      res.send({cmd: "고객정보 수정", id, ...req.body}); 
      res.send(results); 
    });    
});

//삭제 Delete |  json(parameter) => req.body
app.delete("/customer/:id", (req, res)=>{
    const id = req.params.id;
    sql = `delete from customer
           where id=${id}`;
    pool.query(sql, function (err, results, fields) {     
        if(err) { console.log(err);
          
        }
      console.log(results);
      res.send({cmd: "고객정보 삭제", id}) 
      res.send(results); 
    });    
    
})

// app.route("/customer")
// .delete( (req, res) => { res.send("고객정보 삭제"); })

app.listen(port, ()=>{
    console.log(`server runing http://localhost:${port}`);
})
