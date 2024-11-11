import logo from './logo.svg';
import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente';
import ContadorLikes from './components/ContadorLikes';

function App() {

  return (
    <div className='container'>
      <h1>Aprendiendo UseState - Ejemplo 1</h1>      
      <ContadorLikes></ContadorLikes>
    </div>
  );
}

export default App;