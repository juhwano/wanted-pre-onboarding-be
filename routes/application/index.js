const express = require("express");
const router = express.Router();
const models = require("../../models");
const sequelize = require("sequelize");
const company = require("../../models/company");
const Op = sequelize.Op;

//채용 공고 조회
router.get("/", async (req, res) => {
  try {
    let result = await models.application.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: models.company,
          attributes: ["name", "country", "region"],
        },
      ],
    });

    res.render("application/index", { applications: result });
  } catch (err) {
    console.error(err);
    res.json({
      message: "조회 실패",
    });
  }
});

//채용 공고 등록
router.post("/", async (req, res) => {
  const { company_id, position, reward, content, skill } = req.body;
  try {
    await models.application
      .create({
        company_id,
        position,
        reward: parseInt(reward),
        content,
        skill,
      })
      .then(() => {
        console.log("데이터 추가 완료");
        res.redirect("/application");
      })
      .catch((err) => {
        console.log("데이터 추가 실패");
        console.error(err);
      });
  } catch (err) {
    console.error(err);
    res.json({
      message: "등록 실패",
    });
  }
});

//채용 공고 수정 페이지
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await models.application
      .findOne({
        include: [
          {
            model: models.company,
          },
        ],
        where: { id },
      })
      .then((result) => {
        console.log(result);
        res.render("application/detail", {
          application: result,
        });
      })
      .catch((err) => {
        console.log("데이터 조회 실패");
        console.error(err);
      });
  } catch (err) {
    console.error(err);
  }
});

//채용 공고 수정
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { position, reward, content, skill } = req.body;

  try {
    await models.application
      .update(
        {
          position,
          reward,
          content,
          skill,
        },
        {
          where: { id },
        }
      )
      .then(() => {
        console.log("데이터 수정 완료");
        res.redirect("/application");
      })
      .catch((err) => {
        console.log("데이터 수정 실패");
        console.error(err);
      });
  } catch (err) {
    console.error(err);
    res.json({
      message: "수정 실패",
    });
  }
});

//채용 공고 삭제
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await models.application
      .destroy({
        where: { id },
      })
      .then(() => {
        res.redirect("/application");
      })
      .catch((err) => {
        console.log("데이터 삭제 실패");
        console.error(err);
      });
  } catch (err) {
    console.error(err);
    res.json({
      message: "삭제 실패",
    });
  }
});

module.exports = router;
