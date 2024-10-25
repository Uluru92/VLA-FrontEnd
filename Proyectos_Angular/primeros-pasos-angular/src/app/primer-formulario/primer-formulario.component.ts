import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-formulario-jorddy',
  templateUrl: './primer-formulario.component.html',
  styleUrl: './primer-formulario.component.scss'
})
export class PrimerFormularioComponent
{
  @Input() nombrePersona: string = "";
}