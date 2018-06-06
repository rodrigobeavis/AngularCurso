import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {



  constructor(
    //  private _elementRef: ElementRef, 
    //  private _renderer: Renderer
  ) {


  }

  //@HostBinding('style.backgroudColor') backgroundColor: string;

  private backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    this.backgroundColor = 'white';
  }







  //   @HostListener('mouseenter') onMouseOver(){
  //       this.backgroundColor = this.highlightColor;
  //   }

  //   @HostListener('mouseleave') onMouseLeave(){
  //       this.backgroundColor = this.defaultColor;
  //   }

  //   @HostBinding('style.backgroundColor') backgroundColor: string;

  //   @Input() defaultColor: string = 'white';
  //   @Input('highlight') highlightColor: string = 'yellow';

  //   constructor() { }

  //   ngOnInit(){
  //     this.backgroundColor = this.defaultColor;
  // }

}
