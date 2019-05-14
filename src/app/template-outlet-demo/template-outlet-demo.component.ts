import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 't-template-outlet-demo',
  templateUrl: './template-outlet-demo.component.html',
  styleUrls: ['./template-outlet-demo.component.less']
})
export class TemplateOutletDemoComponent {
  user = {
    image: 'assets/user.png',
    firstName: 'John',
    lastName: 'Doe',
    age: 27
  };
  template: TemplateRef<any>;
}
