import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursosCriadoComponent } from '../receber-cursos-criado/receber-cursos-criado.component';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursosCriadoComponent
    ],
  imports: [
    CommonModule
  ],
  exports:[
    CriarCursoComponent
  ],
  providers: [CursosService],
})
export class CriarCursoModule { }
