import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  constructor(private element : ElementRef, @Inject(DOCUMENT) private document : Document, private renderer : Renderer2) {
   }

   ngOnInit(): void {
      //  console.log(this.element);

      //  console.log(this.document);
      //  const inptField = this.document.getElementById('firstNameId');
      //  console.log(inptField);
     
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor','teal');
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor','white');
   }

}
