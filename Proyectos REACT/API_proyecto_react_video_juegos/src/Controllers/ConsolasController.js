const accesoBD = require("../DataBase/ConsolasBD");


const ObtenerConsolas = (req, res) =>
{
    const detalle = accesoBD.ObtenerConsolas();

    const DetalleRespuesta = 
    {
        Codigo: 0,
        Descripcion: "Transaccion Exitosa",
        Detalle: detalle
    }

    res.send({ DetalleRespuesta});
}

module.exports = {
    ObtenerConsolas
};

//Tarea
//ObtenerVideoJuegosPorConsola (int idConsola)
//Devuelve: todos los video juegos de la consola
//creem toda la estructura de las demas clases bd, controller, router, integracion en el indexjs