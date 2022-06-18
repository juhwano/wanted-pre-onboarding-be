"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const application = sequelize.define(
    "application",
    {
      position: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      reward: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      skill: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      freezeTableName: true,
    }
  );

  application.associate = (models) => {
    application.belongsTo(models.company, {
      foreignKey: { name: "company_id", allowNull: false },
      onDelete: "CASCADE",
    });
    application.hasMany(models.history, {
      foreignKey: { name: "application_id", allowNull: false },
      onDelete: "CASCADE",
    });
  };

  return application;
};
