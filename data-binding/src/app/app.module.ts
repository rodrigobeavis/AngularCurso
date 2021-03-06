
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputPropetyComponent } from './input-propety/input-propety.component';
import { OutputPropetyComponent } from './output-propety/output-propety.component';
import { CicloComponent } from './ciclo/ciclo.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropetyComponent,
    OutputPropetyComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
