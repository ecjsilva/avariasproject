const express = require("express");

const routes = express.Router();

const AvariasController = require("./controllers/AvariasController");

routes.get("/avarias", AvariasController.index);

module.exports = routes;
