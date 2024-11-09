import { Component, OnInit } from '@angular/core';
import { ConsumoApiPaisService } from '../services/consumo-api/consumo-api-pais.service';
import { Pais } from '../models/Pais';


@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrl: './consumo-api.component.scss'
})
export class ConsumoApiComponent implements OnInit
{
  palabraClave: string = "";
  vectorPaises : Pais[] = [];

  constructor(private paisesServices : ConsumoApiPaisService){}

  ngOnInit(): void {
    
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

  filtrarPalabra(): any
  {
    return this.vectorPaises.filter(pais =>
      pais.idPais.toLowerCase().includes(this.palabraClave.toLowerCase()) ||
      pais.nombrePais.toLowerCase().includes(this.palabraClave.toLowerCase()) ||
      pais.capital.toLowerCase().includes(this.palabraClave.toLowerCase()) ||
      pais.moneda.toLowerCase().includes(this.palabraClave.toLowerCase())
    )
  }
}