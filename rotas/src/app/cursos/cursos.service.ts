import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos() {
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Java' }
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      const curso: any = cursos[i];
      // tslint:disable-next-line:triple-equals
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }

  constructor() { }

}
