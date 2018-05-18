import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loaine.traning';
  cursoAngular: Boolean = true;
  // urlImagen:string = 'http://lorempixel.com/g/400/200/';
  urlImagen: string = 'http://via.placeholder.com/400x200';

  valorAual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso:string = 'Angular';
  valorInicial = 15;

  onMudouValor(evento) {
    console.log(evento);
  }


  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    console.log(this.isMouseOver);
  }

  botaoClicado() {
    alert('clique no botão');
  }

  onKeyUP(event: KeyboardEvent) {
    this.valorAual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }


  constructor() {}

  ngOnInit() {}
}
