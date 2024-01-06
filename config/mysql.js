const { Sequelize } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USERNAME;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
  port: 40897,
});

const dbConnectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexion Correcta");
  } catch (e) {
    console.log("Error de conexion: " + e);
  }
};

module.exports = { sequelize, dbConnectMysql };
