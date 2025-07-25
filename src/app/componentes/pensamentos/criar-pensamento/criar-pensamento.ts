import { ListarPensamento } from './../listar-pensamento/listar-pensamento';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Pensamentoint } from '../pensamento';
import { Pensamentosv } from '../pensamentosv';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-criar-pensamento',
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './criar-pensamento.html',
  styleUrl: './criar-pensamento.css'
})
export class CriarPensamento {


  formulario!: FormGroup

  constructor(
    private service: Pensamentosv,
    private router: Router,
    private formbuilder: FormBuilder 
  ){

  }

    ngOnInit(): void {
      this.formulario = this.formbuilder.group({
        conteudo: ['', Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: ['', Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: ['modelo1'],
        favorito: [false]
      })
  }

  criarPensamento() {
    if(this.formulario.valid){
      
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }
  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  habilitarbotao(): string{
    if(this.formulario.valid) {
      return 'botao'
    }else {
      return 'botao__desabilitado'
    }
  }

}
