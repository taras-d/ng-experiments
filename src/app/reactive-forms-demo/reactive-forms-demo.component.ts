import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 't-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.less']
})
export class ReactiveFormsDemoComponent implements OnInit {

  countries = [
    { value: '', text: '-' },
    { value: 'usa', text: 'USA' },
    { value: 'canada', text: 'Canada' },
    { value: 'ukraine', text: 'Ukraine' }
  ];

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: '',
      gender: '',
      email: '',
      country: '',
      newsletter: false
    });
  }

  ngOnInit() {
  }

  onUserFormSubmit(): void {
    console.log(this.userForm.value);
  }

}
