// todo.js

const express = require("express");
const router = express.Router();

const mysql = require("../mysql/index"); //index 생략가능하지만 다 적는게 안헷갈..
const sql = {
    todoList:"SELECT * FROM todo1",
    todoInsert:"insert into todo1 set ?",
    todoUpdate:"update todo1 set ? where id=?",
    todoDelete:"delete from todo1 where id=?"
}

//전체조회
router.get("/", async (req, res)=>{ 
    const result = await mysql.query(sql.todoList);
    res.send(result); 
});

//등록 ...req.body
router.post("/", async (req, res) => { 
    const result = await mysql.query(sql.todoInsert, req.body);
    if(result.affectedRows == 1){
        res.send(true + "등록성공");
    }else{
        res.send(false);
    }
});

//수정 req.body, req.params.id
router.put("/:id", async (req, res)=>{ 
    const result = await mysql.query(sql.todoUpdate, [req.body, req.params.id])
    if(result.affectedRows == 1){
        res.send(true + "수정성공");
    }else{
        res.send(false);
    }
});

//삭제 req.params.id
router.delete("/:id", async (req, res)=>{
    const result = await mysql.query(sql.todoDelete, req.params.id);
    if(result.affectedRows == 1){
        res.send(true + "삭제성공");
    }else{
        res.send(false);
    }
});

module.exports = router;