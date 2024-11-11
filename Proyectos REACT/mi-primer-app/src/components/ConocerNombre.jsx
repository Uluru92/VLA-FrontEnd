import React, { useState } from "react";

function ConocerNombre() {

    const [nombre, setNombre] = useState("");

    /*function captarTexto(event)
    {
        setNombre(event.target.value);
    }
    */
    return (
        <div>
            <h3>Conociendo mi nombre</h3>
            <input className="form-control"
                placeholder="Digite su nombre"
                value={nombre}
                onInput={(e)=> setNombre(e.target.value)}
            ></input>
            <h3>El nombre es: {nombre}</h3>
        </div>
    )
}

export default ConocerNombre;