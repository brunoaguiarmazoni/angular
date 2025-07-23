import { Pensamentoint } from './../pensamento';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-pensamento',
  imports: [CommonModule, RouterModule],
  templateUrl: './pensamento.html',
  styleUrl: './pensamento.css'
})
export class Pensamento {

  @Input() pensamento: Pensamentoint = {
    id: '',
    conteudo: 'I love angular.',
    autoria: 'Bruno',
    modelo: 'modelo3'
  }

  larguraPensamento(){
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
