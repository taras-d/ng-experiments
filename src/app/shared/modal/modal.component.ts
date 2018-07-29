import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 't-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent {

  @Input() visible = false;
  @Input() closeIcon = true;
  @Input() closeByOverlay = true;
  @Input() closeByEsc = true;
  @Input() contentStyle = null;
  @Input() header = '';

  @Output() visibleChange = new EventEmitter();

  onCloseClick(): void {
    this.changeVisible(false);
  }

  onViewportClick(event: MouseEvent): void {
    if (this.closeByOverlay && event.target === event.currentTarget) {
      this.changeVisible(false);
    }
  }

  @HostListener('window:keydown.esc')
  onEscPress(): void {
    if (this.closeByEsc && this.visible) {
      this.changeVisible(false);
    }
  }

  changeVisible(visible: boolean): void {
    this.visible = visible;
    this.visibleChange.emit(visible);
  }

}
