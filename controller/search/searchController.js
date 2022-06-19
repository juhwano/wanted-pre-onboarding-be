const models = require("../../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;

const searchController = {
  searchQuery: async (req, res) => {
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
            {
              position: {
                [Op.like]: "%" + query + "%",
              },
            },
          ],
        },
      })
      .then((result) => {
        res.json(result);
      });
  },
};

module.exports = searchController;
