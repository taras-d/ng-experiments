import { Component, Input, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 't-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent {

  @Input() trigger: 'click' | 'hover' = 'click';
  @Input() position: 'top' | 'left' | 'right' | 'bottom' = 'bottom';
  @Input() closeByClickOutside = true;

  visible = false;

  constructor(private el: ElementRef) {

  }

  onTriggerClick(): void {
    if (this.trigger === 'click') {
      this.changeVisibility(!this.visible);
    }
  }

  @HostListener('mouseenter', ['$event'])
  @HostListener('mouseleave', ['$event'])
  onHostMouseEnterLeave(event: MouseEvent): void {
    if (this.trigger === 'hover') {
      this.changeVisibility(event.type === 'mouseenter');
    }
  }

  @HostListener('window:click', ['$event'])
  onWinClick(event: MouseEvent): void {
    if (
      this.visible &&
      this.trigger === 'click' &&
      this.closeByClickOutside && 
      (event.target as HTMLElement).closest('t-tooltip') !== this.el.nativeElement
    ) {
      this.changeVisibility(false);
    }
  }

  getContentClasses(): {[key: string]: any} {
    const classes = { visible: this.visible };

    if (this.position) {
      classes[this.position] = true;
    }
    
    return classes;
  }

  changeVisibility(visible: boolean): void {
    this.visible = visible;
  }

}
