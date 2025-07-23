import { Component } from '@angular/core';
import { Pensamentoint } from '../pensamento';
import { Pensamentosv } from '../pensamentosv';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  imports: [RouterModule, FormsModule],
  templateUrl: './editar-pensamento.html',
  styleUrl: './editar-pensamento.css'
})
export class EditarPensamento {
  pensamento: Pensamentoint = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: Pensamentosv,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorID(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })

  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])

  }

}
