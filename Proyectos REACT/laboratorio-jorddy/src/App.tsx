
import MenuComponent from './Components/MenuComponent';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <div>
      <MenuComponent></MenuComponent>
      <Outlet/>  
    </div> 
  );

}

export default App;

//El outlet unicamente se usa en el en orquestador en este caso .App