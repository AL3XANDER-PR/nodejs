const express = require("express");
const {
  createUsuario,
  getUsuario,
  getUsuarioByPhone,
} = require("../controllers/usuario");
const multer = require("multer");
const { validatorCreateUsuario } = require("../validator/usuario");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../storage`;
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split(".").pop();
    const filename = `file-${Date.now()}.${ext}`;
    cb(null, filename);
  },
});

const uploadMiddleware = multer({ storage });

router.post(
  "/",
  uploadMiddleware.single("file"),
  validatorCreateUsuario,
  createUsuario
);

router.get("/", getUsuario);
router.get("/byphone", getUsuarioByPhone);

module.exports = router;
