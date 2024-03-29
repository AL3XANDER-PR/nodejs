const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === "nosql" ? "./nosql" : "./mysql";

const models = {
  pacienteModel: require(`${pathModels}/paciente`),
  usuarioModel: require(`${pathModels}/usuario`),
  botModel: require(`${pathModels}/bot`),
};
module.exports = models;
