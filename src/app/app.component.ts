import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateExampleComponent } from './components/template-example/template-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'explore-template';
}
