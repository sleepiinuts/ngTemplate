import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss',
})
export class AccordianComponent<T extends { name: string }> implements OnInit {
  @Input('title') title!: string;
  @Input('items') items!: T[];

  // title = input.required<string>();
  // items = input.required<T[]>();

  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
