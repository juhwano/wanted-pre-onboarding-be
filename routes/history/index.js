const express = require("express");
const router = express.Router();
const historyController = require("../../controller/history/historyController");

//지원내역 보여주기
router.get("/", historyController.getHistory);
//채용공고 지원하기(사용자)
router.post("/", historyController.addHistory);

module.exports = router;
