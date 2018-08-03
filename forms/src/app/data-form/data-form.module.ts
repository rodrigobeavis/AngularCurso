import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { DropdownService } from '../shared/services/dropdown.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [DataFormComponent],
  providers: [ DropdownService ]
})
export class DataFormModule { }
