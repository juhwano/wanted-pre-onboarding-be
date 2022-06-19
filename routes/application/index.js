const express = require("express");
const router = express.Router();
const applicationController = require("../../controller/application/applicationController");

//채용 공고 조회
router.get("/", applicationController.getAllApplication);
//채용 공고 등록
router.post("/", applicationController.addApplication);
//채용 공고 수정 페이지
router.get("/:id", applicationController.findUpdateApplication);
//채용 공고 수정
router.put("/:id", applicationController.updateApplication);
//채용 공고 삭제
router.delete("/:id", applicationController.deleteApplcation);

module.exports = router;
