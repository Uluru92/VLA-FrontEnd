import axios from "axios";
import { useEffect, useState } from "react";

const ComsumoapiPaises: React.FC = () => {
    const [paises, setPaises] = useState<string[]>([]);
    const [estaCargando, setEstaCargando] = useState<boolean>(false);

    useEffect(() => {
        const api_paises = axios.get('http://localhost:3015/api/route/ObtenerTodosLosPaises');
            setPaises(api_paises);
    }, [])

    return (
        <div className="container">
            <h3>Ejercicio Hook 2</h3>
            <h4>Los datos del API son:</h4>

            {
                estaCargando ? (
                    <h4>Se esta cargando la informacion</h4>
                ) : (
                    <select className="form-select">
                        <option value='0'>Seleccione un país</option>
                        {
                            paises.map((pais, index) => (
                                <option key={index}>{pais}</option>
                            ))
                        }
                    </select>
                )
            }
        </div >
    )
}

export default ComsumoapiPaises;