import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonios2',
  templateUrl: './testimonios2.component.html',
  styleUrl: './testimonios2.component.scss'
})
export class Testimonios2Component {
  @Input() nombreImagen: string = "Imagen1.jpg";
}
