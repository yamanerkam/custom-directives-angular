import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from "./first/first.component";
import { ExampleDirective } from './directives/example.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponent, ExampleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-directives';
}
