import { ListarPensamento } from './../listar-pensamento/listar-pensamento';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Pensamentoint } from '../pensamento';
import { Pensamentosv } from '../pensamentosv';


@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento {

  pensamento: Pensamentoint = {

    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private service: Pensamentosv,
    private router: Router
  ){

  }

    ngOnInit(): void {
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
