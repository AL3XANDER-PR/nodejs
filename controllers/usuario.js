const { usuarioModel } = require("../models");
const { sequelize } = require("../config/mysql");
const { Op } = require("sequelize");

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createUsuario = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const url_format = `nodejs-production-6c72.up.railway.app/${file.filename}`;
  const data = await usuarioModel.create({ ...body, url_format });
  res.send({ data });
};
const getUsuario = async (req, res) => {
  const { body } = req;
  console.log(body);
  // const url_format = `http://localhost:3007/${file.filename}`;
  const data = await usuarioModel.findOne({
    where: {
      [Op.or]: [
        sequelize.where(
          sequelize.fn(
            "concat",
            sequelize.col("firstName"),
            " ",
            sequelize.col("lastName")
          ),
          { [Op.like]: "%" + req.query.name + "%" }
        ),
      ],
      ssn: { [Op.like]: req.query.ssn },
    },
  });
  res.send(data.url_format);
};

module.exports = {
  createUsuario,
  getUsuario,
};
