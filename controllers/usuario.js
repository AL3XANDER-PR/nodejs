const { usuarioModel } = require("../models");
const { sequelize } = require("../config/mysql");
const { Op } = require("sequelize");
const { handleHttpError } = require("../utils/handleErrors");

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createUsuario = async (req, res) => {
  const { body, file } = req;
  console.log(file);
  const url_format = `https://nodejs-production-b648.up.railway.app/${file.filename}`;
  // const url_format = `http://localhost:3007/${file.filename}`;
  const data = await usuarioModel.create({ ...body, url_format });
  res.send({ data });
};
const getUsuario = async (req, res) => {
  const { body, query } = req;
  try {
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
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_EN_GET_USUARIOS");
  }
};
const getUsuarios = async (req, res) => {
  console.log(req.query);
  const params = {
    q: req.query.q,
    perPage: Number(req.query.perPage),
    page: Number(req.query.page)
      ? Number(req.query.page) * Number(req.query.perPage)
      : 0,
  };
  const data = await usuarioModel.findAndCountAll({
    where: {
      [Op.or]: [
        sequelize.where(
          sequelize.fn(
            "concat",
            sequelize.col("firstName"),
            " ",
            sequelize.col("lastName")
          ),
          { [Op.like]: "%" + params.q + "%" }
        ),
      ],
    },
    offset: params.page,
    limit: params.perPage,
  });

  const totalPages = Math.ceil(data.count / params.perPage);
  // console.log(totalPages);
  console.log();

  res.send({
    count: data.count,
    rows: data.rows,
    totalPages: totalPages,
    currentPageNumber: Number(req.query.page) + 1,
    to:
      (Number(req.query.page) + 1) * Number(req.query.perPage) <= data.count
        ? (Number(req.query.page) + 1) * Number(req.query.perPage)
        : data.count,
    from: data.count,
  });
};
const getUsuarioByPhone = async (req, res) => {
  const { body, query } = req;
  try {
    console.log(query);
    const data = await usuarioModel.findOne({
      where: {
        phone: { [Op.like]: req.query.phone },
      },
    });
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_EN_GET_USUARIOS");
  }
};

module.exports = {
  createUsuario,
  getUsuario,
  getUsuarioByPhone,
  getUsuarios,
};
