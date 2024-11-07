import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Persona } from '../../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService
{
  private apiPersona = "http://localhost:3015/api/route/";

  constructor(private http: HttpClient) { }

  ObtenerTodasLasPersonas(): Observable<{DetalleRespuesta:Persona[]}>
  {
    return this.http.get<{DetalleRespuesta:Persona[]}>(`${this.apiPersona}/ObtenerTodasLasPersonas`)
      .pipe(
         map(response =>{
          return response;
         }), 
         catchError(error =>{
           return throwError(error)
         })
      );
  }

  GuardarNuevaPersona(persona: Persona): Observable<any>
  {
    return this.http.post<any>(`${this.apiPersona}/RegistrarNuevaPersona`,persona)
  }
}
