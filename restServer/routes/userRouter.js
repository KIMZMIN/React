const express = require("express");
const router = express.Router();

const mysql = require("../mysql/index"); 
const sql = {
    userList:"SELECT * FROM user",
    userInfo:"SELECT * FROM user WHERE uid=?",
    userInsert:"insert into user set ?",
    userUpdate:"update user set ? where uid=?",
    userDelete:"delete from user where uid=?"
}

//전체조회
router.get("/", async (req, res)=>{ 
    const result = await mysql.query(sql.userList);
    res.send(result); 
});

//단건조회
router.get("/:uid", async (req, res)=>{
    const uid = req.params.uid
    const result = await mysql.query(sql.userInfo, uid)    
    res.send(result); 
});

//등록 ...req.body
router.post("/", async (req, res) => { 
    const result = await mysql.query(sql.userInsert, req.body);
    if(result.affectedRows == 1){
        res.send(true + "등록성공");
    }else{
        res.send(false);
    }
});

//수정 req.body, req.params.id
router.put("/:uid", async (req, res)=>{ 
    const result = await mysql.query(sql.userUpdate, [req.body, req.params.uid])
    if(result.affectedRows == 1){
        res.send(true + "수정성공");
    }else{
        res.send(false);
    }
});

//삭제 req.params.id
router.delete("/:uid", async (req, res)=>{
    const result = await mysql.query(sql.userDelete, req.params.uid);
    if(result.affectedRows == 1){
        res.send(true + "삭제성공");
    }else{
        res.send(false);
    }
});

module.exports = router;