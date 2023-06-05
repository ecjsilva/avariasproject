const knex = require("../database/database");

module.exports = {
  async index(req, res) {
    const results = await knex("CODGRUPO")
      .from("PCGRUPOAVARIA")
      .where("CODGRUPO", req.params.id);

    return res.json(results);
  },
};
