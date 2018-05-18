import { Component, OnInit, OnChanges, DoCheck, AfterContentInit ,AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, OnDestroy {


@Input() valorInicial: number = 10;

  private log (hook: string) {
  console.log(hook);
  }

  constructor() {
    this.log('constructor');
  }


// onReady
  ngOnInit() {
    this.log('ngOnInit');
  }

// tslint:disable-next-line:use-life-cycle-interface
ngOnChanges() {
  this.log('ngOnChanges');
}

ngDoCheck() {
  this.log('ngDoCheck');
}

ngAfterContentInit() {
  this.log('ngAfterContentInit');
}

ngAfterContentChecked() {
  this.log('ngAfterContentChecked');

}

ngAfterViewChecked() {
  this.log('ngAfterViewChecked');

}

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.log('ngOnDestroy');
}

}
