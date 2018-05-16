import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  constructor() { }

  nome:string = "abc";

  pessoa:any = {idade: 33,
                nome: 'def'
              }


  ngOnInit() {
  }

}
