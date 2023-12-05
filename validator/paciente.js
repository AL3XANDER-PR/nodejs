const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreatePaciente = [
  check("firstName").exists().notEmpty().trim(),
  check("lastName").exists().notEmpty().trim(),
  check("phone").exists().isNumeric(),
  check("date").exists(),
  check("retinopathy").exists().notEmpty(),
  check("diabetic").exists().notEmpty(),
  check("glaucoma").exists().notEmpty(),
  check("cataract").exists().notEmpty(),
  // check("born").exists(),
  // check("email").exists().notEmpty().isEmail().trim(),
  // check("address").exists().notEmpty().trim(),
  // check("medical_plan").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

module.exports = { validatorCreatePaciente };
