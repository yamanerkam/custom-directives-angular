import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $: any

@Directive({
  selector: '[appExample]',
  standalone: true
})
export class ExampleDirective implements OnInit {
  //   selector: '[appExample]', => <div appExample>hey </div> attribute
  //   selector: 'appExample', => <div class = "appExample"   >hey </div> class

  @Input()
  color!: string;

  @HostListener("click")
  onClick() {
    alert("right clicked")
  }

  @HostBinding("style.color")
  colorWriting: string = "purple"

  constructor(private element: ElementRef) {

  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.color
    $(this.element.nativeElement).fadeOut(2000).fadeIn()
  }



}
