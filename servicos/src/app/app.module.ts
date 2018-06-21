
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

//import { ReceberCursosCriadoComponent } from './receber-cursos-criado/receber-cursos-criado.component';
//import { CriarCursoComponent } from './criar-curso/criar-curso.component';


@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
   // ReceberCursosCriadoComponent    
  ],
  imports: [
    BrowserModule,
    CriarCursoModule
  ],
  //providers: [CursosService],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
