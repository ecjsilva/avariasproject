const knex = require("../database/database");

module.exports = {
  async index(req, res) {
    const results = await knex("*")
      .from("AVARIAS")
      .orderBy("DATA", "DESC")
      .limit("50");

    return res.json(results);
  },
};
