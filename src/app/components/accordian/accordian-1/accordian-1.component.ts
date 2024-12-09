import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AccordianComponent } from '../accordian.component';

@Component({
  selector: 'app-accordian-1',
  standalone: true,
  imports: [AccordianComponent, MatIconModule],
  templateUrl: './accordian-1.component.html',
  styleUrl: './accordian-1.component.scss',
})
export class Accordian1Component {
  trucks = [
    {
      name: 't1',
      model: 'truck-t1',
    },
    {
      name: 't2',
      model: 'truck-t2',
    },
    {
      name: 't3',
      model: 'truck-t3',
    },
  ];
}
