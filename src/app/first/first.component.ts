import { Component } from '@angular/core';
import { ExampleDirective } from '../directives/example.directive';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [ExampleDirective],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
