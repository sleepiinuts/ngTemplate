import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordian',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.scss',
  animations: [
    trigger('rotate', [
      state('begin', style({ rotate: '0deg' })),
      state('end', style({ rotate: '180deg' })),
      transition('begin <=> end', animate('1s')),
    ]),
    trigger('openCloseContent', [
      state('open', style({ opacity: 1, visibility: 'visible', height: '*' })),
      state('close', style({ opacity: 0, visibility: 'hidden', height: 0 })),
      transition('open <=> close', animate('1s')),
    ]),
  ],
})
export class AccordianComponent<T extends { name: string }> implements OnInit {
  @Input('title') title!: string;
  @Input('items') items!: T[];
  @ContentChild('template') tpl!: TemplateRef<any>;

  toggleAccordian: boolean = false;

  // title = input.required<string>();
  // items = input.required<T[]>();

  constructor() {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onToggleAccordian(): void {
    this.toggleAccordian = !this.toggleAccordian;
  }
}
