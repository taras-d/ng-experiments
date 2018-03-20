import { Component, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 't-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.less']
})
export class PopoverComponent {

  @Input() trigger: 'click' | 'hover' = 'click';
  @Input() position: 'top' | 'left' | 'right' | 'bottom' = 'bottom';
  @Input() closeByClickOutside = true;

  visible = false;

  constructor(private el: ElementRef) {

  }

  onTriggerMouseEvent(event: MouseEvent): void {
    const trigger = this.trigger,
      type = event.type;

    if (trigger === 'click' && type === 'click') {
      this.visible = !this.visible;
    } else if (trigger === 'hover' && type === 'mouseenter') {
      this.visible = true;
    } else if (trigger === 'hover' && type === 'mouseleave') {
      this.visible = false;
    }
  }

  @HostListener('window:click', ['$event'])
  onWinClick(event: MouseEvent): void {
    if (
      this.visible &&
      this.trigger === 'click' &&
      this.closeByClickOutside && 
      (event.target as HTMLElement).closest('t-popover') !== this.el.nativeElement
    ) {
      this.visible = false;
    }
  }

}
