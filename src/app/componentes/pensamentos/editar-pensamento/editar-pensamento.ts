import { Component } from '@angular/core';
import { Pensamentoint } from '../pensamento';
import { Pensamentosv } from '../pensamentosv';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-pensamento',
  imports: [RouterModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css'
})
export class EditarPensamento {

  formulario!: FormGroup

  constructor(
    private service: Pensamentosv,
    private router: Router,
    private route: ActivatedRoute,
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorID(parseInt(id!)).subscribe((pensamento) => {
      this.formulario = this.formbuilder.group({
                id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
      })
    })
  }

  editarPensamento() {
        this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid) {
      return "botao"
    }
    else return "botao__desabilitado"
  }

}
