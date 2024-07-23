const express = require("express");
const rooter = express.Router();
const personaController = require("../Controlers/PersonaController")

router
    .get("/ObtenerTodasLasPersonas", personaController.ObtenerTodasLasPersonas)