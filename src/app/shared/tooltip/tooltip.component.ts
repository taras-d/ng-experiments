import { Component, Input, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 't-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less']
})
export class TooltipComponent {

  @Input() trigger: 'click' | 'hover' = 'click';

  @Input() position: (
    'top' | 'top-left' | 'top-right' |
    'left' | 'left-top' | 'left-bottom' |
    'bottom' | 'bottom-left' | 'bottom-right' |
    'right' | 'right-top' | 'right-bottom'
  ) = 'bottom';
  
  @Input() arrow = true;
  @Input() closeByClickOutside = true;

  @Output() show = new EventEmitter();
  @Output() hide = new EventEmitter();

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
    if (visible) {
      this.show.emit();
    } else {
      this.hide.emit();
    }
  }

}
