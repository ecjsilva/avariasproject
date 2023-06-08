const oracledb = require("oracledb");
oracledb.initOracleClient({ libDir: "\\avarias\\instantclient_11_2" });

//Conexão com o banco de dados
const {
  ORACLE_USER,
  ORACLE_PASSWORD,
  ORACLE_CONNECTSTRING,
} = require("../../config");

var knex = require("knex")({
  client: "oracledb",
  connection: {
    host: ORACLE_CONNECTSTRING,
    user: ORACLE_USER,
    password: ORACLE_PASSWORD,
    database: "teste",
  },
});

module.exports = knex;
