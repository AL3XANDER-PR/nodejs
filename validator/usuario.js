const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateUsuario = [
  check("firstName").exists().notEmpty().trim(),
  check("lastName").exists().notEmpty().trim(),

  // check("born").exists(),
  // check("email").exists().notEmpty().isEmail().trim(),
  // check("address").exists().notEmpty().trim(),
  // check("medical_plan").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreateUsuario };
