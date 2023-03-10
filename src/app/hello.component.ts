import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./app.component.css'],
})
export class HelloComponent {
  @Input() item: number;
  @Input() name: string;
}
