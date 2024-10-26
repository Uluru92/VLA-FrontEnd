import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.scss'
})
export class ListadoPaisesComponent
{
  paises: string[] = [
    "Argentina",
    "Brasil",
    "Chile",
    "Costa Rica",
    "Panama"
  ]
}