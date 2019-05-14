import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const FRUITS = [
  'Apple',
  'Banana',
  'Tangerine',
  'Grape',
  'Kiwi'
];

let ID = 1;

@Component({
  selector: 't-animations-demo',
  templateUrl: './animations-demo.component.html',
  styleUrls: ['./animations-demo.component.less'],
  animations: [
    trigger('showIcon', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter, :leave', animate(500))
    ]),
    trigger('listItem', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate(300, style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class AnimationsDemoComponent implements OnInit {
  showIcon = false;
  items = [];

  ngOnInit(): void {
    interval(300).pipe(take(3))
      .subscribe(() => this.onItemAdd());
  }

  onItemAdd(): void {
    this.items.push({
      id: ID++,
      name: FRUITS[Math.floor(Math.random() * FRUITS.length)]
    });
  }

  onItemClick(index: number): void {
    this.items.splice(index, 1);
  }

  listTrackBy(index: number, item: any): void {
    return item.id;
  }
}
