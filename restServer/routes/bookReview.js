const express = require("express");
const router = express.Router();
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })

const mysql = require("../mysql/index"); 
const sql = {
    reviewList:"SELECT * FROM bookreview order by no desc",
    reviewInfo:"SELECT * FROM bookreview WHERE no=?",
    reviewInsert:"insert into bookreview set ?",
    reviewUpdate:"update bookreview set ? where no=?",
    reviewDelete:"delete from bookreview where no=?"
}

//전체조회
router.get("/", async (req, res)=>{ 
    const result = await mysql.query(sql.reviewList);
    res.send(result); 
});

//단건조회
router.get("/:no", async (req, res)=>{
    const no = req.params.no
    const result = await mysql.query(sql.reviewInfo, no)    
    res.send(result); 
});

//등록 ...req.body
router.post("/", async (req, res) => { 
    {/*upload.single('imgfile'),*/} 
    //req.file.filename
    //const data = {...req.body, img:req.file.filename}
    const result = await mysql.query(sql.reviewInsert, req.body);
    if(result.affectedRows == 1){
        res.send(true + "등록성공");
    }else{
        res.send(false);
    }
});

//수정 req.body, req.params.id
router.put("/:no", async (req, res)=>{ 
    const result = await mysql.query(sql.reviewUpdate, [req.body, req.params.no])
    if(result.affectedRows == 1){
        res.send(true + "수정성공");
    }else{
        res.send(false);
    }
});

//삭제 req.params.id
router.delete("/:no", async (req, res)=>{
    const result = await mysql.query(sql.reviewDelete, req.params.no);
    if(result.affectedRows == 1){
        res.send(true + "삭제성공");
    }else{
        res.send(false);
    }
});

module.exports = router;