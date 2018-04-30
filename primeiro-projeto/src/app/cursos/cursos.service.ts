import { Injectable } from '@angular/core';

@Injectable()//injeção de dependência
export class CursosService {

  constructor() { }

  getCursos(){
    return ['java','Ex Js','Angular'];
  }

}
