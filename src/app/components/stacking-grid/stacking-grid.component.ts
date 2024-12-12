import { animate, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stacking-grid',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './stacking-grid.component.html',
  styleUrl: './stacking-grid.component.scss',
  animations: [
    trigger('crossfade', [
      transition(':enter', [
        style({ transform: 'scale(0.7)', opacity: 0 }),
        animate('1s ease-in', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ transform: 'scale(0.7)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class StackingGridComponent {
  readonly countItem: number = 3;
  protected visible = signal<number>(0);

  constructor() {}

  previous(): void {
    if (this.visible() > 0) {
      // update active index
      this.visible.update((v) => v - 1);
    }
  }

  next(): void {
    if (this.visible() < this.countItem) {
      // update active index
      this.visible.update((v) => v + 1);
    }
  }
}
