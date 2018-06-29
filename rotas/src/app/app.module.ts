import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
//import { routing } from './app.routing';
import { AppRouttingModule } from './app.routting.module';
//import { AlunosComponent } from './alunos/alunos.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    //AlunosComponent,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    CursosModule,
    AlunosModule,
    AppRouttingModule,
    
   // routing
  ],
  // providers: [
  //   CursosService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
