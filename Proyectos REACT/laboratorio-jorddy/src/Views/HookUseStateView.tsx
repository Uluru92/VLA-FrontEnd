//Acá importamos otros componentes o librearias

import HelloWorldComponent from "../Components/HelloWorldComponents";
import MenuComponent from "../Components/MenuComponent";

const HookUseStateView: React.FC = () => //Asi se declara un componente en la vida real
{
    return (
        <div>
            <MenuComponent

            ></MenuComponent>
        </div >
    )
}

export default HookUseStateView;