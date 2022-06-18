"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
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

  user.associate = (models) => {
    user.hasMany(models.history, {
      foreignKey: { name: "user_id", allowNull: false },
      onDelete: "CASCADE",
    });
  };

  return user;
};
