import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-cursos-criado',
  templateUrl: './receber-cursos-criado.component.html',
  styleUrls: ['./receber-cursos-criado.component.css']
})
export class ReceberCursosCriadoComponent implements OnInit {


  curso: string;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
}

}
