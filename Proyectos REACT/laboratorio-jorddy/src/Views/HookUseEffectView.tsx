import CronometroComponent from "../Components/CronometroComponent";
import MensajesOcultosComponent from "../Components/MensajesOcultosComponent";
import SimulacionApiComponent from "../Components/SimulacionApiComponent";

const HookUseEffectView: React.FC = () => //Asi se declara un componente en la vida real
{
    return (
        <div>

            <MensajesOcultosComponent />
            <SimulacionApiComponent />
            <CronometroComponent></CronometroComponent>

        </div >
    )
}

export default HookUseEffectView;