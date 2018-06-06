import { Directive, HostListener, HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {


  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

 
  private backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.highlightColor;

    
  }
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }


 

}