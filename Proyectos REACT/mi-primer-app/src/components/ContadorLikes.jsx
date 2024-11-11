import React, { useState } from "react";

function ContadorLikes()
{
    const [numeroLikes, setNumeroLikes] = useState(0);

    function aumentarLikes()
    {
        setNumeroLikes(numeroLikes+1)
    }

    function disminuirLikes()
    {
        if (numeroLikes <= 0)
        {
            setNumeroLikes(0)
        }
        else
            setNumeroLikes(numeroLikes - 1)
    }

    return (
        //Toda referencia de css usa className
        <div>
            <h3>Cuantos likes tengo; {numeroLikes}</h3>
            <button
                onClick={aumentarLikes}
                className="btn btn-primary">Aumente
            </button>
            <button
                onClick={disminuirLikes}
                className="btn btn-danger">Disminuir
            </button>
        </div>
    )
}

export default ContadorLikes;