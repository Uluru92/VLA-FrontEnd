const accesoBD = require("../DataBase/VideoJuegosBD");


const ObtenerVideoJuegosPorConsola = (req, res) =>
{
    const idConsola = req.body;

    console.log(idConsola)
    const detalle = accesoBD.ObtenerVideoJuegosPorConsola();
    console.log(detalle)
    const consolasFiltradas = detalle.filter(vd => vd.id_consola === idConsola.id )

    const DetalleRespuesta =
    {
        Codigo: 0,
        Descripcion: "Transaccion Exitosa",
        Detalle: consolasFiltradas
    }

    res.send({ DetalleRespuesta });
}

module.exports = {
    ObtenerVideoJuegosPorConsola
};
