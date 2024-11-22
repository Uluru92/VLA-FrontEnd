const accesoBD = require("../DataBase/ConsolasBD");


const ObtenerConsolas = (req, res) =>
{
    const detalle = accesoBD.ObtenerConsolas();

    const DetalleRespuesta = 
    {
        Codigo: 0,
        Descripcion: "Transaccion exitosa",
        Detalle: detalle
    }

    res.send({ DetalleRespuesta});
}

module.exports = {
    ObtenerConsolas
};