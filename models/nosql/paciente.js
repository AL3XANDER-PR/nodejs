const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    phone: {
      type: Number,
    },
    date: {
      type: Date,
    },
    retinopathy: {
      type: Boolean,
    },
    diabetic: {
      type: Boolean,
    },
    glaucoma: {
      type: Boolean,
    },
    cataract: {
      type: Boolean,
    },
    born: {
      type: Date,
    },
    email: {
      type: String,
      unique: true,
    },
    address: {
      type: String,
    },
    medical_plan: {
      type: String,
      unique: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("pacientes", PacienteSchema);
