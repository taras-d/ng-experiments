import { Component, Input, ViewChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 't-content-expander',
  templateUrl: './content-expander.component.html',
  styleUrls: ['./content-expander.component.less']
})
export class ContentExpanderComponent implements AfterContentInit {
  @ViewChild('wrap') wrapRef: ElementRef;
  @ViewChild('content') contentRef: ElementRef;

  @Input() height = '125px';

  expand: boolean;
  overflow: boolean;

  ngAfterContentInit(): void {
    setTimeout(() => this.checkOverflow());
  }

  checkOverflow(): void {
    const wrap = this.wrapRef.nativeElement as HTMLElement;
    const content = this.contentRef.nativeElement as HTMLElement;
    this.overflow = Boolean(
      wrap && content && content.offsetHeight > wrap.offsetHeight
    );
  }
}
