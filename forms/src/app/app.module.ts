
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TemplateFormComponent } from './template-form/template-form.component';
import { DataFormComponent } from './data-form/data-form.component';
import { TemplateFormModule } from './template-form/template-form.module';
// import { FormDebugComponent } from './form-debug/form-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    // TemplateFormComponent,
    DataFormComponent
    // FormDebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TemplateFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
