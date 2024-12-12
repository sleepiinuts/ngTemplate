import {
  Component,
  ElementRef,
  QueryList,
  Renderer2,
  signal,
  ViewChildren,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stacking-grid',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './stacking-grid.component.html',
  styleUrl: './stacking-grid.component.scss',
})
export class StackingGridComponent {
  @ViewChildren('item_1') items!: QueryList<ElementRef>;

  readonly countItem: number = 3;
  protected visible = signal<number>(0);

  constructor(private renderer: Renderer2) {}

  previous(): void {
    if (this.visible() > 0) {
      // remove previously actived item
      this.renderer.removeClass(
        this.items.get(this.visible())?.nativeElement,
        'active'
      );

      // update active index
      this.visible.update((v) => v - 1);

      // add newly actived item
      this.renderer.addClass(
        this.items.get(this.visible())?.nativeElement,
        'active'
      );
    }
  }

  next(): void {
    if (this.visible() < this.countItem) {
      // remove previously actived item
      this.renderer.removeClass(
        this.items.get(this.visible())?.nativeElement,
        'active'
      );

      // update active index
      this.visible.update((v) => v + 1);

      // add newly actived item
      this.renderer.addClass(
        this.items.get(this.visible())?.nativeElement,
        'active'
      );
    }
  }
}
