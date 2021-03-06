import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 't-test-bench',
  templateUrl: './test-bench.component.html',
  styleUrls: ['./test-bench.component.less']
})
export class TestBenchComponent implements OnInit {
  name: string;

  modal = {
    visible: false,
    closeIcon: true,
    closeByOverlay: true,
    closeByEsc: true
  };

  tooltip = {
    trigger: 'click',
    position: 'bottom',
    animation: null,
    arrow: true,
    closeByClickOutside: true
  };

  loader = {
    block: true
  };

  checkbox = {
    value: true
  };

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');
    });
  }
}
