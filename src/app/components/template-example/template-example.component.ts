import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-template-example',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './template-example.component.html',
  styleUrl: './template-example.component.scss',
})
export class TemplateExampleComponent
  implements OnChanges, AfterViewInit, OnInit
{
  items = [1, 2, 3, 4];
  isLoading: boolean = true;
  activeTemplate!: TemplateRef<any>;

  @ViewChild('vcr', { read: ViewContainerRef })
  vcr!: ViewContainerRef;
  @ViewChild('tpl') tpl!: TemplateRef<any>;
  @ViewChild('loading') loadingTpl!: TemplateRef<any>;

  constructor(private cd: ChangeDetectorRef) {
    console.log(`constructor-isLoading: ${this.isLoading}`);
  }
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(`onChange-isLoading: ${this.isLoading}`);
  }

  ngAfterViewInit(): void {
    console.log(`afterViewInit-isLoading: ${this.isLoading}`);
  }

  toggleLoading(): void {
    this.isLoading = !this.isLoading;
    // this.vcr.clear();

    if (this.isLoading) {
      this.activeTemplate = this.loadingTpl;
      // this.vcr.insert(this.loadingTpl.createEmbeddedView(null));
    } else {
      this.activeTemplate = this.tpl;
      // this.vcr.insert(this.tpl.createEmbeddedView(null));
    }
  }
}
