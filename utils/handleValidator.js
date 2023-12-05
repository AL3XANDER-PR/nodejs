const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); //Continuar al controloador
  } catch (err) {
    console.log(err);
    res.status(403);
    res.send({ errors: err.array() });
  }
};

module.exports = validateResults;
