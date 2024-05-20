const express = require("express");
const router = express.Router();

const mysql = require("../mysql/index"); 
const sql = {
    replyList:"SELECT * FROM bookreply order by replyno desc",
    replyInfo:"SELECT * FROM bookreply WHERE reviewno=? order by replyno desc",
    replyInsert:"insert into bookreply set ? ",
    replyUpdate:"update bookreply set ? where replyno=?",
    replyDelete:"delete from bookreply where replyno=?"
}

//전체조회
router.get("/", async (req, res)=>{ 
    const result = await mysql.query(sql.replyList);
    res.send(result); 
});

//단건조회
router.get("/:rno", async (req, res)=>{
    const rno = req.params.rno
    const result = await mysql.query(sql.replyInfo, rno)    
    res.send(result); 
});

//등록 ...req.body
router.post("/", async (req, res) => { 
    const result = await mysql.query(sql.replyInsert, req.body);
    if(result.affectedRows == 1){
        res.send(true + "등록성공");
    }else{
        res.send(false);
    }
});

//수정 req.body, req.params.id
router.put("/:rno", async (req, res)=>{ 
    const result = await mysql.query(sql.replyUpdate, [req.body, req.params.rno])
    if(result.affectedRows == 1){
        res.send(true + "수정성공");
    }else{
        res.send(false);
    }
});

//삭제 req.params.id
router.delete("/:rno", async (req, res)=>{
    const result = await mysql.query(sql.replyDelete, req.params.rno);
    if(result.affectedRows == 1){
        res.send(true + "삭제성공");
    }else{
        res.send(false);
    }
});

module.exports = router;