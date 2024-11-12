import React from "react";
import '../Testimonios/Testimonios.css'

function Testimonios(props) {
    return (
        <div className="contenedorTestimonio">
            <img className="imagenTestimonio" src={props.imagen}></img>
            <div className="contenedorTextoTestimonio">
                <p className="nombreTestimonio">{props.Nombre} en <strong> {props.Pais}</strong></p>
                <p className="cargoTestimonio">{props.Cargo}</p>
                <p className="textoTestimonio"> lorem ipsum dolor sit amet, blablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablabla
                    blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabl
                    blablablablablablablablablablablablablablablablablablablablablablablabla
                </p>
            </div>
        </div>
    )
}
export default Testimonios;