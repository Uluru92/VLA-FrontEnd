const express = require("express");
const router = express.Router();
const ObtenerTodasLasPersonas = require("../Controlers/PersonaController");
router
    .get("/ObtenerTodasLasPersonas", ObtenerTodasLasPersonas.ObtenerTodasLasPersonas)

module.exports = router;