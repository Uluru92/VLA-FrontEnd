import MensajesOcultosComponent from "../Components/MensajesOcultosComponent";
import SimulacionApiComponent from "../Components/SimulacionApiComponent";

const HookUseEffectView: React.FC = () => //Asi se declara un componente en la vida real
{
    return (
        <div>

            <MensajesOcultosComponent />
            <SimulacionApiComponent />

        </div >
    )
}

export default HookUseEffectView;