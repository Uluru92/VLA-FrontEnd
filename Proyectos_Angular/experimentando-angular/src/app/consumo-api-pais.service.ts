import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoApiPaisService {
  private apiPais = "http://localhost:3015/api/route/ObtenerTodoslosPaises";
  constructor(private http: HttpClient) { }

  obtenerPaisesDelAPI(): Observable<any[]>{
    return this.http.get<any[]>(this.apiPais);
  }
}
