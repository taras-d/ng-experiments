import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tHolder]'
})
export class HolderDirective {

  constructor(public viewContainerRef: ViewContainerRef) {

  }

}
