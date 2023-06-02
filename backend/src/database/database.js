const oracledb = require("oracledb");
oracledb.initOracleClient({ libDir: "C:\\oracle\\instantclient_11_2" });

var knex = require("knex")({
  client: "oracledb",
  connection: {
    host: "192.168.1.247",
    user: "teste",
    password: "teste",
    database: "teste",
  },
});

module.exports = knex;
