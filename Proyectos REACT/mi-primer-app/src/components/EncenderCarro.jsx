import React, { useState } from "react";
import '../EncenderCarro.css'

function EncenderCarro() {
    
    const [estadoCarro, setEstadoCarro] = useState(false);

    function EncenderApagar() {
        setEstadoCarro(!estadoCarro);
    }

    return (
        <div>
            <h3 className={estadoCarro==true?'encendido':'apagado'}>
                Mi carro está: {estadoCarro == true ? 'Encendiendo' : 'Apagando'}</h3>
            <button
                className="btn btn-warning"
                onClick={EncenderApagar}>Encender/Apagar</button>
        </div>
    )
}

export default EncenderCarro;