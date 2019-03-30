import { Directive, ElementRef,OnInit,Renderer2,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {

  @HostBinding ('class.yellow') myBackgroundColor:boolean
  
  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener ('mouseenter') mouseEnterEvent (eventData:Event){
    this.myBackgroundColor = true
   
  }
  @HostListener ('mouseleave') mouseLeaveEvent (eventData:Event){
    this.myBackgroundColor = false
    
  }
}
