import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private el:ElementRef) { 

  }
  @HostListener('click')
  onClick(){
    this.el.nativeElement.classList.add('highlight');
  }
}
