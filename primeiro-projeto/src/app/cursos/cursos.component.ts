import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
//apenas mostrar e interagir com usuario
export class CursosComponent implements OnInit {

  nomePortal:string;
  cursos:string[] = [];

  constructor(private cursosService: CursosService) { 

    this.nomePortal = 'http://loiane.training';    

    //var servico = new CursosService();
    // injeção de dependência: forneça a instâcia de uma classe automaticamente
    // resultado

    this.cursos = this.cursosService.getCursos();

  
  }

  ngOnInit() {
  }

}
