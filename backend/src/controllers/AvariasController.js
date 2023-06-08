const knex = require("../database/database");

//Consulta os dados iniciais
module.exports = {
  async index(req, res) {
    const results = await knex("*")
      .from("PCGRUPOAVARIA")
      .whereNotNull("DATAGRUPO")
      .orderBy("DATAGRUPO", "DESC")
      .limit("50");

    return res.json(results);
  },
};
