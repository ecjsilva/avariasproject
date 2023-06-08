const knex = require("../database/database");

//Fazendo consulta de acordo com a URL
module.exports = {
  async index(req, res) {
    const results = await knex("CODGRUPO")
      .from("PCGRUPOAVARIA")
      .where("CODGRUPO", req.params.id);

    return res.json(results);
  },
};
