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
        email: [null, [Validators.required, Validators.email]]
    });



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
