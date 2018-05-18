import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contador',
  templateUrl: './output-propety.component.html',
  styleUrls: ['./output-propety.component.css']
})
export class OutputPropetyComponent implements OnInit {
  @Input() valor: number = 5;

  @Output() mudouValor = new EventEmitter();

 @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa() {
    console.log(this.campoValorInput.nativeElement.value);
   // this.valor++;
   this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.valor});

  }

  decrementa() {
    //this.valor--;
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() {}

  ngOnInit() {}
}
