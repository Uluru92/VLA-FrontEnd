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
  mensajeErrorEdad: string = "";
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

    if (this.edadPersona == "") {
      this.mostrarMensajeErrorEdad = true;
      this.mensajeErrorEdad = "El campo de edad de la persona es requerido" 
    }
    else
    {
      const edadValidar = Number(this.edadPersona);
      if (isNaN(edadValidar)) {
        this.mensajeErrorEdad = "El campo de edad debe ser solo números";
      }
      else {
        if(edadValidar <= 17) {
          this.mensajeErrorEdad = "Solo se pueden registrar personas mayores de edad"
        } else {
          this.mostrarMensajeErrorEdad = false;
        }
      }
    }
  }
}