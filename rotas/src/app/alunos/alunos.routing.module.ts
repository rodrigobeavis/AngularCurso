import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';


const alunosRotes: Routes = [
    {
        path: 'alunos', component: AlunosComponent, children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent },
            { path: ':id/:editar', component: AlunoFormComponent }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(alunosRotes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }