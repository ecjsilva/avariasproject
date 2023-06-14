const express = require("express");
const routes = express.Router();

const AvariasController = require("./controllers/CodAvariaController");
const GavariasController = require("./controllers/GavariasController");


routes.get("/avarias", AvariasController.index);

routes.get("/grup/:id", GavariasController.index);

module.exports = routes;
