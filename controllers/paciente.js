const { pacienteModel } = require("../models");
const { sequelize } = require("../config/mysql");
const { Op } = require("sequelize");
/**
 * Obtener Lista de la basde de datos
 * @param {*} req
 * @param {*} res
 */
const getPacientes = async (req, res) => {
  const params = {
    q: req.query.q,
    perPage: Number(req.query.perPage),
    page: Number(req.query.page)
      ? Number(req.query.page) * Number(req.query.perPage)
      : 0,
  };
  const data = await pacienteModel.findAndCountAll({
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

  res.send({
    count: data.count,
    rows: data.rows,
    totalPages: totalPages,
    currentPageNumber: Number(req.query.page) + 1,
    to: data.rows.length,
    from: data.rows.length,
  });
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getPaciente = async (req, res) => {
  const data = await pacienteModel.findOne({ where: { id: req.params.id } });
  console.log(data);
  res.send({ data });
};

/**
 * Insertar un registro
 * @param {*} req
 * @param {*} res
 */
const createPaciente = async (req, res) => {
  const { body } = req;
  const data = await pacienteModel.create(body);
  res.send({ data });
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updatePaciente = async (req, res) => {
  const { body } = req;
  console.log(body);
  const data = await pacienteModel.update(body, {
    where: { id: req.params.id },
  });

  res.send({ data });
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deletePaciente = (req, res) => {};

module.exports = {
  getPacientes,
  getPaciente,
  createPaciente,
  updatePaciente,
  deletePaciente,
};
