import { Pensamentosv } from './../pensamentosv';
import { Component, OnInit } from '@angular/core';
import { Pensamentoint } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  imports: [],
  templateUrl: './excluir-pensamento.html',
  styleUrl: './excluir-pensamento.css'
})
export class ExcluirPensamento implements OnInit {
  pensamento: Pensamentoint = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor(
    private service: Pensamentosv,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorID(parseInt(id!)).subscribe((pensamento) =>{
      this.pensamento = pensamento
    })
  }

  excluirPensamento(){
    if(this.pensamento.id){

      this.service.excluir(this.pensamento.id).subscribe(() =>{
        this.router.navigate(['/listarPensamento'])
      })
    }
  }
  
  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])

  }
}
