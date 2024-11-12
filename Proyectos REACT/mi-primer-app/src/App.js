import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';
import ContadorLikes from './components/ContadorLikes';
import ConocerNombre from './components/ConocerNombre';
import EncenderCarro from './components/EncenderCarro';
import Testimonios from './Testimonios/Testimonios';

function App() {

  return (
    <div className='container'>
      <h1>Aprendiendo UseState - Ejemplo 1</h1>      
      <ContadorLikes></ContadorLikes>
      <h1>Aprendiendo UseState - Ejemplo 2</h1>      
      <ConocerNombre></ConocerNombre>
      <h1>Aprendiendo UseState - Ejemplo 3</h1>
      <EncenderCarro></EncenderCarro>
      <h1>Ejemplo CSS</h1>
      <Testimonios
        Nombre="Jorddy Castro Araya"
        Pais="Costa Rica"
        Cargo="Desarrollador de Software"
        imagen={require("../src/img/Imagen1.png")}
      ></Testimonios>

    </div>
  );
}

export default App;

/*

Crear un componente que se llame Operaciones Matemáticas
 dos inputs
 select + - * / 
 boton
 h3 con el resultado
 solo agarrar los 2 inputs y sumar y mostrar resultado

*/