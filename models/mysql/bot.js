const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const Bot = sequelize.define(
  "history",
  {
    keyword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refSerialize: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    options: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Bot;
