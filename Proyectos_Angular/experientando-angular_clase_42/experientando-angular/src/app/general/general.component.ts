import { Component } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';  //este es para utilizar Caruseles

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/2000/500`);
}
