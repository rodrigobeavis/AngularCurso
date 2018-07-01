import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  id: number;
  inscricao: Subscription;
  aluno: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.alunoService.getAluno(this.id);
        if (this.aluno == null) {
          this.router.navigate(['/naoEncontrado']);
        }
      }
      );
  }

  OnDestroy() {
    this.inscricao.unsubscribe();
  }

editarContato() {
 this.router.navigate(['/alunos', this.aluno.id, 'editar']);
}

}
