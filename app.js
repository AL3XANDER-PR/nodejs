require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnectNoSql = require("./config/mongo");
const { dbConnectMysql } = require("./config/mysql");
const app = express();

const ENGINE_DB = process.env.ENGINE_DB;
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("http://localhost:" + port);
});

ENGINE_DB === "nosql" ? dbConnectNoSql() : dbConnectMysql();
