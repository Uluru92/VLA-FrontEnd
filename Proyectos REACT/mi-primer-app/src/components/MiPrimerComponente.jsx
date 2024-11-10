function MiPrimerComponente(props)
{
    return (
        <div>
            <h1>Estoy en mi primer componente</h1>
            <h4>Esto está vacilón!</h4>
            <h3>Mi nombre es: {props.Nombre} {props.Apellido1} {props.Apellido2}</h3>
            <h3>Mi edad es: {props.Edad}</h3>
            <button onClick={ManejarClic}>Dame clic</button>
        </div>
    )    
}

export default MiPrimerComponente;