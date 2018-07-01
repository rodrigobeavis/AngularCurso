import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {path: 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule'},
  {path: 'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule'},
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
