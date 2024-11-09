import { Component } from '@angular/core';
import { ConsumoApiPaisService } from '../services/consumo-api/consumo-api-pais.service';
import { Pais } from '../models/Pais';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent {

  vectorPaises: Pais[] = [];
  
  constructor(private paisesServices: ConsumoApiPaisService) { }

  ngOnInit(): void {

    this.paisesServices.obtenerPaisesDelAPI().subscribe(
      data => {
        this.vectorPaises = data.DetalleRespuesta;
        console.log(this.vectorPaises)
      },
      error => {
        console.log("Error al cargar los paises", error)
      }
    )
  }

}
