import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

const notEmpty = control => {
  return /^\s*$/.test(control.value)? { notEmpty: true }: null;
}

@Component({
  selector: 't-reactive-forms-demo',
  templateUrl: './reactive-forms-demo.component.html',
  styleUrls: ['./reactive-forms-demo.component.less']
})
export class ReactiveFormsDemoComponent {

  countries = [
    { value: '', text: '-' },
    { value: 'usa', text: 'USA' },
    { value: 'canada', text: 'Canada' },
    { value: 'ukraine', text: 'Ukraine' }
  ];

  cardTypes = [
    { value: 'standart', text: 'Standart' },
    { value: 'premium', text: 'Premium' },
    { value: 'platinum', text: 'Platinum' }
  ];

  cardId = 1;

  userForm: FormGroup;

  cardsForm: FormArray;

  constructor(private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: '',
      gender: '',
      email: '',
      country: '',
      newsletter: false
    });

    this.cardsForm = this.fb.array([]);

  }

  onUserFormSubmit(): void {
    console.table(this.userForm.value);
  }

  onCardAdd(): void {
    const card = this.fb.group({
      id: this.cardId++,
      num: ['', notEmpty],
      type: 'standart',
      discount: ['', notEmpty]
    });

    const enableDiscount = () => {
      const { type, discount } = card.controls;
      if (type.value === 'standart') {
        discount.setValue('');
        discount.disable();
      } else {
        discount.enable();
      }
    }

    enableDiscount();
    card.controls['type'].valueChanges.subscribe(enableDiscount);

    this.cardsForm.push(card);
  }

  onCardDelete(index: number): void {
    this.cardsForm.removeAt(index);
  }

  onCardFormSubmit(): void {
    console.table(this.cardsForm.value);
  }

}
