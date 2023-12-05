const express = require("express");
const {
  getPacientes,
  createPaciente,
  getPaciente,
  updatePaciente,
} = require("../controllers/paciente");
const { validatorCreatePaciente } = require("../validator/paciente");
const router = express.Router();

router.get("/", getPacientes);
router.get("/:id", getPaciente);
router.put("/:id", updatePaciente);
router.post("/", validatorCreatePaciente, createPaciente);

module.exports = router;
