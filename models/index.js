const ENGINE_DB = process.env.ENGINE_DB;

const pathModels = ENGINE_DB === 'nosql' ? './nosql' : './mysql' 

const models = {
  pacienteModel: require(`${pathModels}/paciente`),
};
module.exports = models;
