import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'parent to child component';
  data = 5;
  myName = 'Kavya';
  updateData() {
    this.data = Math.floor(Math.random() * 10);
  }
}
