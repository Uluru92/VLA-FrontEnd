function MiPrimerComponente(props)
{
    return (
        <div>
            <h1>Estoy en mi primer componente</h1>
            <h4>Esto está vacilón!</h4>
            <h3>Mi nombre es: {props.Nombre} {props.Apellido1} {props.Apellido2}</h3>
        </div>
    )    

}

export default MiPrimerComponente;