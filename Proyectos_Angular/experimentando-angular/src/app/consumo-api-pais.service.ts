import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { response } from 'express';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Pais } from './models/Pais';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiPaisService {
  private apiPais = "http://localhost:3015/api/route/ObtenerTodoslosPaises";
  constructor(private http: HttpClient) { }

  obtenerPaisesDelAPI(): Observable<{ DetalleRespuesta:Pais[]}>
  {
    return this.http.get<{ DetalleRespuesta:Pais[]}>(this.apiPais)
    .pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return throwError(error)
      })
    )
  }
}
