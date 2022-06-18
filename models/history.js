"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const history = sequelize.define(
    "history",
    {},
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      freezeTableName: true,
    }
  );

  history.associate = (models) => {
    history.belongsTo(models.application, {
      foreignKey: { name: "application_id", allowNull: false },
      onDelete: "CASCADE",
    });
    history.belongsTo(models.user, {
      foreignKey: { name: "user_id", allowNull: false },
      onDelete: "CASCADE",
    });
  };

  return history;
};
