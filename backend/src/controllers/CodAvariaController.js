const knex = require("../database/database");

//Consulta os dados iniciais
module.exports = {
  async index(req, res) {
    const results = await knex
      .select("CODGRUPOAVARIA", "FORNECEDOR", "DATAGRUPO")
      .sum("VALORDOGRUPO as VALORDOGRUPO")
      .sum("CODGRUPOAVARIA")
      .from("PCMONITORAMENTOAVARIA")
      .groupBy("CODGRUPOAVARIA", "FORNECEDOR", "DATAGRUPO")
      .orderBy("CODGRUPOAVARIA", "DESC")

    return res.json(results);
  },
};
