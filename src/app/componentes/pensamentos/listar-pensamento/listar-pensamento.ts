import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'
import { Pensamento } from "../pensamento/pensamento";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pensamentoint } from '../pensamento';
import { Pensamentosv } from '../pensamentosv';

@Component({
  selector: 'app-listar-pensamento',
  imports: [RouterModule, Pensamento, CommonModule, FormsModule],
  templateUrl: './listar-pensamento.html',
  styleUrl: './listar-pensamento.css'
})
export class ListarPensamento {
  listaPensamentos: Pensamentoint[] = []

  constructor(private service: Pensamentosv) {}

  ngOnInit():void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })

  }

}
