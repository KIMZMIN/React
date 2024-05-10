// product.js

const express = require("express");
const router = express.Router();

//전체조회
router.get("/", function (req, res) { res.send("product root"); });
//단건조회
router.get("/:id", function (req, res) { res.send("product root"); });
//등록
router.post("/", function (req, res) { res.send("insert root"); });
//수정
router.put("/:id", function (req, res) { res.send("update root"); });
//삭제
router.delete("/:id", function (req, res) { res.send("delete route"); });

module.exports = router;