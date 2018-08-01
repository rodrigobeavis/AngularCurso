import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  // Objeto que vai representar o form no DOM Formulario
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: Http) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // endereco: new FormGroup({
    //   cep: new FormControl(),
    // });
    // });

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        logradouro: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
    //  return !campo.valid && campo.touched; // template
  }

  verificaEmailInvalido() {
    const campoEmail = this.formulario.get('email');

    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  onSubmit() {
    console.log(this.formulario);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .pipe(map(rst => rst))
      .subscribe(dados => {
        console.log(dados);
        // Reseta Form
        // this.formulario.reset();
        this.resetar();
      }, (error: any) => alert('error'));
  }


  resetar() {
    this.formulario.reset();
  }


  
  populaDadosForm(dados) {
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

    this.formulario.patchValue({
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


  resetForm() {
    this.formulario.patchValue({
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


  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;

    cep = cep.replace(/\D/g, '');

    if (cep !== '') {

      const validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.resetForm();
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados.json()))
          .subscribe(dados => this.populaDadosForm(dados));

      }
    }
  }
}
