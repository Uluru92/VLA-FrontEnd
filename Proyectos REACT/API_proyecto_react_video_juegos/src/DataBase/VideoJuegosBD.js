const path = require('path');
const fs = require('fs');

const db_archivo_directorio = path.join(__dirname, '../DataBase/VideoJuegosBD.json');

const ObtenerVideoJuegosPorConsola = () => {
    try {
        let lista = require(db_archivo_directorio);
        return lista.VideoJuegos;
    }
    catch (error) {
        return error;
    }
}

module.exports = {
    ObtenerVideoJuegosPorConsola
}