import { Component, OnInit } from '@angular/core';
import { ConsumoApiPaisService } from '../consumo-api-pais.service';
import { Pais } from '../models/Pais'; 

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrl: './consumo-api.component.scss'
})
export class ConsumoApiComponent implements OnInit
{

  vectorPaises: Pais[] = [];

  constructor(private paisesServices: ConsumoApiPaisService) { }
  
  ngOnInit(): void {
    //aca consumo el API
    this.paisesServices.obtenerPaisesDelAPI().subscribe(
      data => 
      {
        this.vectorPaises = data.DetalleRespuesta;
        console.log(this.vectorPaises)
      },
      error=>{
        console.log("Error al cargar los paises", error)
      }
    )
  }
}
