import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCategory]'
})
export class CategoryDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
    this.changeText('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.changeText('white');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private changeText(text: string) {
    this.el.nativeElement.innerText = text;
  }

}
