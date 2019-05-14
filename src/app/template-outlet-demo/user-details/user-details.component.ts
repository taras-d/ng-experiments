import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 't-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less']
})
export class UserDetailsComponent {
  @Input() user: any;
  @Input() template: TemplateRef<any>;
}
