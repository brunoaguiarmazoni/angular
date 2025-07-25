import { Pensamento } from './pensamento/pensamento';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamentoint } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pensamentosv {

  private readonly API = "http://localhost:3000/pensamentos"

  constructor(private http: HttpClient) {}

  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamentoint[]> {
    const itensPorPagina = 3
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)
    
    if(filtro.trim().length > 2) {
      params = params.set("q", filtro)
    }

    if(favoritos){
      params = params.set("favorito", true)
    }
    return this.http.get<Pensamentoint[]>(this.API, {params})
  }
  
  criar(pensamento: Pensamentoint): Observable<Pensamentoint> {
    return this.http.post<Pensamentoint>(this.API, pensamento)
  }

  excluir(id: number): Observable<Pensamentoint> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamentoint>(url)
  }

  editar(pensamento:Pensamentoint): Observable<Pensamentoint>{
    
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamentoint>(url, pensamento)
    
  }
  
  mudarFavorito(pensamento:Pensamentoint): Observable<Pensamentoint>{
    pensamento.favorito = !pensamento.favorito  
    return this.editar(pensamento)
  }

  buscarPorID (id:number): Observable<Pensamentoint> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamentoint>(url)
  }
  
  
}
