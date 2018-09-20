import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  @Input() base: string;

  @Input() parts: string;

  @Input() withHeader = true;

  header: string;

  paragraphs: string[];

  constructor() { }

  ngOnInit() {
    this.header = this.base + '.header';
    this.paragraphs = this.parts.split(',').map(item => this.base + '.' + item);
  }

}
