import { Component} from '@angular/core';

@Component({
  selector: 'app-primer-formulario-jorddy',
  templateUrl: './primer-formulario.component.html',
  styleUrl: './primer-formulario.component.scss'
})
export class PrimerFormularioComponent
{
  nombrePersona: string = "";
  apellidoPersona: string = "";
  edadPersona: string = "";

  ValidarCampos(): void{
    alert(this.nombrePersona)
  }
}