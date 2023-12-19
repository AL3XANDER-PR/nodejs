const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const Usuario = sequelize.define(
  "usuarios",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
    },
    phone: {
      type: DataTypes.NUMBER,
    },
    ssn: {
      type: DataTypes.NUMBER,
    },
    email: {
      type: DataTypes.STRING,
    },
    url_format: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Usuario;
