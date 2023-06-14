const knex = require("../database/database");

//Fazendo consulta de acordo com a URL
module.exports = {
  async index(req, res) {
    const results = await knex
      .select([
        "PCMONITORAMENTOAVARIA.CODGRUPOAVARIA",
        "PCMONITORAMENTOAVARIA.QTORIGINAL",
        "PCMONITORAMENTOAVARIA.VALORDOGRUPO",
        "PCMONITORAMENTOAVARIA.CODPROD",
        "PCPRODUT.DESCRICAO",
      ])
      .table("PCMONITORAMENTOAVARIA")
      .innerJoin(
        "PCPRODUT",
        "PCPRODUT.CODPROD",
        "PCMONITORAMENTOAVARIA.CODPROD"
      )

      .where("CODGRUPOAVARIA", req.params.id);
    return res.json(results);
  },
};
