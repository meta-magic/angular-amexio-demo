import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular + Amexio Workshop';

  flag : boolean = true;

  onClick(){
    this.flag = !this.flag;
  }
}
