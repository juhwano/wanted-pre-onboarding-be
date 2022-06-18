const express = require("express");
const router = express.Router();
const models = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

//지원내역 보여주기
router.get("/", async (req, res) => {
  try {
    let result = await models.history.findAll({
      order: [["createdAt", "DESC"]],
    });

    console.log(result);

    res.render("history/index", { histories: result });
  } catch (err) {
    console.error(err);
    res.json({
      message: "지원내역 조회 실패",
    });
  }
});

//채용공고 지원하기(사용자)
router.post("/", async (req, res) => {
  const { application_id, user_id } = req.body;
  try {
    let result = await models.history.findOne({
      where: {
        [Op.and]: [{ application_id }, { user_id }],
      },
    });

    if (!result) {
      await models.history
        .create({
          application_id,
          user_id,
        })
        .then(() => {
          console.log("지원 완료");
          res.redirect("/history");
        })
        .catch((err) => {
          console.log("지원 실패");
          console.error(err);
        });
    } else {
      res.json({
        message: "중복 지원입니다.",
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      message: "지원 실패",
    });
  }
});

module.exports = router;
