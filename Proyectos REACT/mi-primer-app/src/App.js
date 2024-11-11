import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';
import ContadorLikes from './components/ContadorLikes';
import ConocerNombre from './components/ConocerNombre';
import EncenderCarro from './components/EncenderCarro';

function App() {

  return (
    <div className='container'>
      <h1>Aprendiendo UseState - Ejemplo 1</h1>      
      <ContadorLikes></ContadorLikes>
      <h1>Aprendiendo UseState - Ejemplo 2</h1>      
      <ConocerNombre></ConocerNombre>
      <h1>Aprendiendo UseState - Ejemplo 3</h1>
      <EncenderCarro></EncenderCarro>
    </div>
  );
}

export default App;