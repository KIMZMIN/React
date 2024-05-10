// todo.js

const express = require("express");
const router = express.Router();

const mysql = require("../mysql/index"); //index 생략가능하지만 다 적는게 안헷갈..
const sql = {
    cusList:"SELECT * FROM todo1",
    cusInsert:"insert into todo1 set ?",
    cusUpdate:"update todo1 set ? where no=?",
    cusDelete:"delete from todo1 where no=?"
}

//전체조회
router.get("/", async (req, res)=>{ 
    const result = await mysql.query(sql.cusList);
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
router.put("/:no", async (req, res)=>{ 
    const result = await mysql.query(sql.cusUpdate, [req.body, req.params.no])
    if(result.affectedRows == 1){
        res.send(true + "수정성공");
    }else{
        res.send(false);
    }
});

//삭제 req.params.id
router.delete("/:no", async (req, res)=>{
    const result = await mysql.query(sql.cusDelete, req.params.no);
    if(result.affectedRows == 1){
        res.send(true + "삭제성공");
    }else{
        res.send(false);
    }
});

module.exports = router;