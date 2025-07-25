import { Pensamentoint } from './../pensamento';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pensamentosv } from '../pensamentosv';


@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css'
})
export class Pensamento {

  @Input() pensamento: Pensamentoint = {
    id: 0,
    conteudo: 'I love angular.',
    autoria: 'Bruno',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamentoint[] = [];

  constructor(private service: Pensamentosv) {} 

  larguraPensamento(){
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito) {
      return 'ativo'
    }else{
      return 'inativo'
    }
  }

  atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)
    });

  }

}
