import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";

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
  }


  constructor(private http: Http) { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return  !campo.valid && campo.touched;
  }

aplicaCssErro(campo) {
  return {
    'has-error': this.verificaValidTouched(campo),
    'has-feedback': this.verificaValidTouched(campo)
  };
}

consultaCEP(cep) {
  console.log(cep);
  cep = cep.replace(/\D/g, '');

  if (cep !== '') {

    const validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      this.http.get(`//viacep.com.br/ws/${cep}/json`)
      .pipe(map(dados => dados.json()))
      .subscribe(dados => console.log(dados));

    }
  }
}


}
