import {Input, OnInit} from '@angular/core';

export class UnitComponent implements OnInit {

  @Input() base: string;

  @Input() parts: string;

  items: string[];

  constructor() { }

  ngOnInit() {
    this.items = this.parts.split(',').map(item => this.base + '.' + item);
  }

}
