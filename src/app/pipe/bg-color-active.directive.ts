import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgColorActive]'
})
export class BgColorActiveDirective {

  constructor(private _ElmentRef: ElementRef) { 
    this._ElmentRef.nativeElement.style.color='black'
     
    }
   


  }

