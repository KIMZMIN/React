// customer.js

const express = require("express");
const router = express.Router();

const mysql = require("../mysql/index"); //index 생략가능하지만 다 적는게 안헷갈..
const sql = {
    cusList:"SELECT * FROM customer",
    cusInfo:"SELECT * FROM customer WHERE id=?",
    cusInsert:"insert into customer set ?",
    cusUpdate:"update customer set 0 where id=?",
    cusDelete:"delete from customer where id=?"
}

//전체조회
router.get("/", async (req, res)=>{ 
    const result = await mysql.query(sql.cusList);
    res.send(result); 
});

//단건조회
router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const result = await mysql.query(sql.cusInfo, id)    
    res.send(result); 
});

//등록 ...req.body
router.post("/", async (req, res) => { 
    const result = await mysql.query(sql.cusInsert, req.body);
    if(result.affectedRows == 1){
        res.send(true + "등록성공");
    }else{
        res.send(false);
    }
});

//수정 req.body, req.params.id
router.put("/:id", async (req, res)=>{ 
    const result = await mysql.query(sql.cusUpdate, [req.body, req.params.id])
    if(result.affectedRows == 1){
        res.send(true + "수정성공");
    }else{
        res.send(false);
    }
});

//삭제 req.params.id
router.delete("/:id", async (req, res)=>{
    const result = await mysql.query(sql.cusDelete, req.params.id);
    if(result.affectedRows == 1){
        res.send(true + "삭제성공");
    }else{
        res.send(false);
    }
});

module.exports = router;