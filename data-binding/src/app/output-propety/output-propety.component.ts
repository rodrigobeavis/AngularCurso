import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contador',
  templateUrl: './output-propety.component.html',
  styleUrls: ['./output-propety.component.css']
})
export class OutputPropetyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() {}

  ngOnInit() {}
}
