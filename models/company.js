"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define(
    "company",
    {
      name: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
      region: {
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

  company.associate = (models) => {
    company.hasMany(models.application, {
      foreignKey: { name: "company_id", allowNull: false },
      onDelete: "CASCADE",
    });
  };

  return company;
};
