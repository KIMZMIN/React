const express = require("express");
const router = express.Router();

const mysql = require("../mysql/index"); 
const sql = {
    boardList:"SELECT * FROM board",
    boardInfo:"SELECT * FROM board WHERE id=?",
    boardInsert:"insert into board set ?",
    boardUpdate:"update board set ? where id=?",
    boardDelete:"delete from board where id=?"
}

//전체조회
router.get("/", async (req, res)=>{ 
    const result = await mysql.query(sql.boardList);
    res.send(result); 
});

//단건조회
router.get("/:id", async (req, res)=>{
    const id = req.params.id
    const result = await mysql.query(sql.boardInfo, id)    
    res.send(result); 
});

//등록 ...req.body
router.post("/", async (req, res) => { 
    const result = await mysql.query(sql.boardInsert, req.body);
    if(result.affectedRows == 1){
        res.send(true + "등록성공");
    }else{
        res.send(false);
    }
});

//수정 req.body, req.params.id
router.put("/:id", async (req, res)=>{ 
    const result = await mysql.query(sql.boardUpdate, [req.body, req.params.id])
    if(result.affectedRows == 1){
        res.send(true + "수정성공");
    }else{
        res.send(false);
    }
});

//삭제 req.params.id
router.delete("/:id", async (req, res)=>{
    const result = await mysql.query(sql.boardDelete, req.params.id);
    if(result.affectedRows == 1){
        res.send(true + "삭제성공");
    }else{
        res.send(false);
    }
});

module.exports = router;