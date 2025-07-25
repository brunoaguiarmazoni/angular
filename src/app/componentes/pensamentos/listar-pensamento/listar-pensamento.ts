import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router'
import { Pensamento } from "../pensamento/pensamento";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pensamentoint } from '../pensamento';
import { Pensamentosv } from '../pensamentosv';
import { BotaoCarregarMais } from "./botao-carregar-mais/botao-carregar-mais";

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterModule, Pensamento, CommonModule, FormsModule, BotaoCarregarMais],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento implements OnInit{
  listaPensamentos: Pensamentoint[] = []
  paginaAtual: number = 1
  haMaisPensamentos:boolean=true
  filtro: string = ''
  favoritos: boolean = false
  listaFavoritos: Pensamentoint[] = []
  titulo:string = 'Meu mural'

  constructor(private service: Pensamentosv, private router: Router) {}

  ngOnInit():void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })

  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(!listaPensamentos.length){
        this.haMaisPensamentos = false
      }
    })
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos
    })
  }

  recarregarComponente() {
  this.titulo = 'Meu mural'
  this.filtro = '';
  this.favoritos = false;
  this.paginaAtual = 1;
  this.haMaisPensamentos = true;
  this.listaFavoritos = [];
  this.listaPensamentos = [];

  this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentos => {
    this.listaPensamentos = listaPensamentos;
  });
}


  listarFavoritos(){
    this.titulo = 'Meus favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual=1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe(listaPensamentosFavoritos => {
      this.listaPensamentos = listaPensamentosFavoritos
      this.listaFavoritos = listaPensamentosFavoritos
    })
  }
}
