const { botModel, usuarioModel } = require("../models");
const Usuario = require("../models/mysql/usuario");
// const Usuario = require("../models/mysql/usuario");
// const { sequelize } = require("../config/mysql");
// const { Op } = require("sequelize");
// const { handleHttpError } = require("../utils/handleErrors");

const getReportBot = async (req, res) => {
  console.log(req.query);
  const params = {
    q: req.query.q,
    perPage: Number(req.query.perPage),
    page: Number(req.query.page)
      ? Number(req.query.page) * Number(req.query.perPage)
      : 0,
  };
  const data = await botModel.findAndCountAll({
    // where: {
    //   [Op.or]: [
    //     sequelize.where(
    //       sequelize.fn(
    //         "concat",
    //         sequelize.col("firstName"),
    //         " ",
    //         sequelize.col("lastName")
    //       ),
    //       { [Op.like]: "%" + params.q + "%" }
    //     ),
    //   ],
    // },
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

const getChatBot = async (req, res) => {
  try {
    const data = await botModel.findAll({
      // include: [
      //   {
      //     model: Usuario,
      //     required: true,
      //     association: Usuario.phone,
      //   },
      // ],
      where: { phone: req.query.phone },
    });
    // console.log(data);
    res.send({ data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getReportBot,
  getChatBot,
};
