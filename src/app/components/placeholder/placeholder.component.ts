import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Placeholder } from './placeholder.model';

@Component({
  selector: 'app-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.scss',
})
export class PlaceholderComponent implements OnInit {
  @Input() animation!: Placeholder['animation'];
  @Input() theme: Placeholder['styles'];

  ngOnInit(): void {}
}
