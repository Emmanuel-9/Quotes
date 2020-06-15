import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appVotecount]'
})
export class VotecountDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.color="red";
   }

}
