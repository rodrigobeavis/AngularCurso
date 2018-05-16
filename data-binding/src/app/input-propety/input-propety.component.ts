import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-propety.component.html',
  styleUrls: ['./input-propety.component.css'],
  //inputs:['nomeCurso:nome']
})
export class InputPropetyComponent implements OnInit {


 @Input('nome') nomeCurso:string = "";

  constructor() { }

  ngOnInit() {
  }

}
