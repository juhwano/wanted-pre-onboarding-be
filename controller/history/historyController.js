const models = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const historyController = {
  getHistory: async (req, res) => {
    try {
      let result = await models.history.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.render("history/index", { histories: result });
    } catch (err) {
      console.error(err);
      res.json({
        message: "지원내역 조회 실패",
      });
    }
  },
  addHistory: async (req, res) => {
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
  },
};

module.exports = historyController;
