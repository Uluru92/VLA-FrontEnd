import { Component } from '@angular/core';

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
  mostrarMensajeErrorNombre: boolean = false;
  mostrarMensajeErrorApellido: boolean = false;
  mostrarMensajeErrorEdad: boolean = false;

  ValidarCampos(): void{
    if (this.nombrePersona == "")
      this.mostrarMensajeErrorNombre = true;
    else
      this.mostrarMensajeErrorNombre = false;

    if (this.apellidoPersona == "")
      this.mostrarMensajeErrorApellido = true;
    else
      this.mostrarMensajeErrorApellido = false;

    if (this.edadPersona == "")
      this.mostrarMensajeErrorEdad = true;
    else
      this.mostrarMensajeErrorEdad = false;
  }
}