const path= require('path');
const fs= require('fs');

const db_archivo_directorio = path.join(__dirname, '../DataBase/PersonasBD.json');

const ObtenerTodasLasPersonas = () =>
{
    try
    {
        let informacionPersonas = require(db_archivo_directorio);
        return informacionPersonas.PersonasRegistradas;
    }
    catch(error)
    {
        return error;
    }
}

const GuardarPersona= (persona)=>
{
    try
    {
        let informacionPersona = require(db_archivo_directorio);
        informacionPersona.PersonasRegistradas.push(persona);
        fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionPersona, null, 2))
    }
    catch(error)
    {
        return error;
    }
}

const EliminarPersona=(persona) =>{

    try
    {
        let informacionPersonas = require(db_archivo_directorio);
        informacionPersonas.PersonasRegistradas = informacionPersonas.PersonasRegistradas.filter(p => p.userName !== persona.userName);
        fs.writeFileSync(db_archivo_directorio, JSON.stringify(informacionPersonas, null, 2))
    }
    catch(error)
    {
        return error;
    }
}
module.exports = {
    ObtenerTodasLasPersonas,
    GuardarPersona,
    EliminarPersona
}