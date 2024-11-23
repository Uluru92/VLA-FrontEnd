const express = require("express");
const router = express.Router();
const accesoController = require("../Controllers/VideoJuegosController");

router
    .post("/ObtenerVideoJuegosPorConsola", accesoController.ObtenerVideoJuegosPorConsola)



module.exports = router;

