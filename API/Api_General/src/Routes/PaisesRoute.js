const express = require("express");
const router = express.Router();
const controladorPaises = require("../Controllers/PaisesController");

router
    .get("/ObtenerTodoslosPaises", controladorPaises.ObtenerTodosLosPaises)

module.exports = router;
