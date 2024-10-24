import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludandoMundoComponent } from './saludando-mundo/saludando-mundo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludandoMundoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aprendiendo-angular-2';
}
