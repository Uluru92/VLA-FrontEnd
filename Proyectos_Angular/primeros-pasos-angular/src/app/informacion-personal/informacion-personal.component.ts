import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-personal',
  templateUrl: './informacion-personal.component.html',
  styleUrl: './informacion-personal.component.scss'
})
export class InformacionPersonalComponent {
  @Input() nombrePersona: string = "";
  @Input() apellidoPersona: string = "";
  @Input() edadPersona: string = "";

}
