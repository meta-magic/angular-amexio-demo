import { Component } from '@angular/core';
import { AmexioTabComponent } from 'amexio-ng-extensions';
import { GreetingsComponent } from './components/1-greetings/greetings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular + Amexio Workshop';

  flag : boolean = true;

  emp : Employee;
  employees : Employee [];

  constructor(){
    this.employees = [];
    this.employees.push(new Employee('Ketan Gote',201000,50000, new Date()));
    this.employees.push(new Employee('Naitik Gote',201000,50000, new Date()));
    this.employees.push(new Employee('Rekha Gote',201000,50000, new Date()));
    this.employees.push(new Employee('Amol Gote',201000,50000, new Date()));
  }
  onClick(){
    this.flag = !this.flag;
  }

  onListClick(emp:Employee){
    this.emp = emp;
  }

  addNewTab(tab: AmexioTabComponent){
    tab.addDynamicTab(' New Tab ','red', false,GreetingsComponent);
  }
}

class Employee {
  name : string;
  empid : number;
  salary : number;
  date :  Date;

  constructor(name: string,empid:number, salary:number, date:Date){
      this.name = name;
      this.empid = empid;
      this.salary = salary;
      this.date = date;
  }

  
}
