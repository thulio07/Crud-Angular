import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private red: ElementRef) {
      red.nativeElement.style.color = 'red'
   }

}
