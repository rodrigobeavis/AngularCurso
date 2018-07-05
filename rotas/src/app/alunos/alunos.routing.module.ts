
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Resolve } from '@angular/router';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGuard } from '../guards/aunos.guard';
import { AlunosDeactivateGuard } from './../guards/alunos-deactivar.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';


const alunosRotes: Routes = [
    {
        path: '', component: AlunosComponent, 
        canActivateChild: [AlunosGuard],
        children: [
            { path: 'novo', component: AlunoFormComponent },
            { path: ':id', component: AlunoDetalheComponent,
                    resolve: {aluno: AlunoDetalheResolver}        
                },
            { path: ':id/:editar', component: AlunoFormComponent,
                canDeactivate: [AlunosDeactivateGuard]
            }
        ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(alunosRotes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule { }
