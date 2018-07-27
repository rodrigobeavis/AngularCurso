import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {


  // usuario: any = {
  //   'nome': 'Rodrigo',
  //   'email': 'rodrigo@email.com'
  // };

  usuario: any = {
    'nome': null,
    'email': null
  };

  onSubmit(form) {
    console.log(form);
    console.log(this.usuario);
    this.http.post('https://httpbin.org/post' , JSON.stringify(form.value))
            .pipe(map(rst => rst))
            .subscribe(dados => console.log(dados));
  }


  constructor(private http: Http) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {

      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.resetForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados.json()))
          .subscribe(dados => this.populaDadosForm(dados, form));

      }
    }
  }

  populaDadosForm(dados, formulario) {
    // formulario.setValue({
    //   'nome': formulario.value.nome,
    //   'email': formulario.value.email,
    //   'endereco': {
    //     'cep': dados.cep,
    //     'logradouro': dados.logradouro,
    //     'numero': '',
    //     'complemento': dados.complemento,
    //     'bairro': dados.bairro,
    //     'cidade': dados.localidade,
    //     'estado ': dados.uf
    //   }
    // });

    formulario.form.patchValue({
      'endereco': {
        'cep': dados.cep,
        'logradouro': dados.logradouro,
        'numero': '',
        'complemento': dados.complemento,
        'bairro': dados.bairro,
        'cidade': dados.localidade,
        'estado ': dados.uf
      }
    });

  }

resetForm(formulario) {
  formulario.form.patchValue({
    'endereco': {
      'logradouro': null,
      'numero': null,
      'complemento': null,
      'bairro': null,
      'cidade': null,
      'estado ': null
    }
  });
}



}
