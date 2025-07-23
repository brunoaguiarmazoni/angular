import { Pensamento } from './pensamento/pensamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamentoint } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pensamentosv {

  private readonly API = "http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) {}

  listar(): Observable<Pensamentoint[]> {
    return this.http.get<Pensamentoint[]>(this.API)
  }

  criar(pensamento: Pensamentoint): Observable<Pensamentoint> {
    return this.http.post<Pensamentoint>(this.API, pensamento)
  }

  excluir(id: string): Observable<Pensamentoint> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamentoint>(url)
  }

  editar(pensamento:Pensamentoint): Observable<Pensamentoint>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamentoint>(url, pensamento)

  }

  buscarPorID (id:string): Observable<Pensamentoint> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamentoint>(url)
  }
  
  
}
