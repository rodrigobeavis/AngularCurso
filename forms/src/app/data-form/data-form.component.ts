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
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
        nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        email: [null, [Validators.required, Validators.email]],
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        logradouro: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado : [null, Validators.required]
    });

  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid  && this.formulario.get(campo).touched;
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
      this.http.post('https://httpbin.org/post' , JSON.stringify(this.formulario.value))
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
}
