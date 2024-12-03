import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  // Obtener lista de elementos
  getElementos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Agregar un nuevo elemento
  agregarElemento(nuevoElemento: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, nuevoElemento);
  }
}
