const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/mysql");

const Paciente = sequelize.define(
  "pacientes",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.NUMBER,
    },
    date: {
      type: DataTypes.DATEONLY,
    },
    retinopathy: {
      type: DataTypes.BOOLEAN,
    },
    diabetic: {
      type: DataTypes.BOOLEAN,
    },
    glaucoma: {
      type: DataTypes.BOOLEAN,
    },
    cataract: {
      type: DataTypes.BOOLEAN,
    },
    born: {
      type: DataTypes.DATEONLY,
    },
    email: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    medical_plan: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Paciente;
