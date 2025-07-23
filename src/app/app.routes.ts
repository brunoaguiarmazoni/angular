import { ListarPensamento } from './componentes/pensamentos/listar-pensamento/listar-pensamento';
import { CriarPensamento } from './componentes/pensamentos/criar-pensamento/criar-pensamento';
import { RouterModule, Routes } from '@angular/router';
import { ExcluirPensamento } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento';
import { EditarPensamento } from './componentes/pensamentos/editar-pensamento/editar-pensamento';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamento',
        pathMatch: 'full'
    },
    {
        path: 'criar-pensamento',
        component: CriarPensamento
    },
    {
        path: 'listarPensamento',
        component: ListarPensamento
    },
    {
        path: 'pensamentos/excluirPensamento/:id',
        component: ExcluirPensamento
    },
    {
        path: 'pensamentos/editarPensamento/:id',
        component: EditarPensamento
    }
];

