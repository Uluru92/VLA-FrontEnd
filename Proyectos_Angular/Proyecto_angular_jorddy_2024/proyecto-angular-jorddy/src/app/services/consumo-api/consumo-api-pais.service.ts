
import { Pais } from '../../models/Pais';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiPaisService 
{
  private apiPais = "http://localhost:3015/api/route/ObtenerTodosLosPaises";

  constructor(private http: HttpClient) { }

  obtenerPaisesDelAPI(): Observable<{DetalleRespuesta:Pais[]}>
  {
    return this.http.get<{DetalleRespuesta:Pais[]}>(this.apiPais)
      .pipe(
         map(response =>{
          return response;
         }), 
         catchError(error =>{
           return throwError(error)
         })
      );
  }
}
