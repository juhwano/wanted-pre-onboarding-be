const express = require("express");
const router = express.Router();
const models = require("../../models");
const sequelize = require("sequelize");
const qs = require("querystring");
const Op = sequelize.Op;

router.get("/", async (req, res) => {
  const { query } = req.query;

  await models.application
    .findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: models.company,
          attributes: ["name", "country", "region"],
        },
      ],
      where: {
        [Op.or]: [
          {
            skill: {
              [Op.like]: "%" + query + "%",
            },
          },
        ],
      },
    })
    .then((result) => {
      res.json(result);
    });
});

module.exports = router;
