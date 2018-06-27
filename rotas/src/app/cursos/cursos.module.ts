import { CursosRouttingModule } from './cursos.routing.module';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';


@NgModule({
    imports: [
        CommonModule,
        CursosRouttingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontradoComponent
    ],
    providers: [CursosService]
})

export class CursosModule{}