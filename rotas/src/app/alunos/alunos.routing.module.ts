import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from '../guards/aunos.guard';


const alunosRotes: Routes = [
    {
        path: '', component: AlunosComponent, 
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/:editar', component: AlunoFormComponent }
        ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(alunosRotes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
