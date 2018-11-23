
import {Component} from '@angular/core';
import { Employee } from 'src/app/model/emp.model';

@Component({
    selector : 'inbuilt-directive',
    templateUrl : 'inbuilt.component.html'
})
export class InbuiltComponent {

    flag : boolean = true;

    gender: string = "2";

    name : string;

    employees : Employee [];

    constructor(){
      this.employees = [];
      this.employees.push(new Employee('Ketan Gote',201000,50000, new Date()));
      this.employees.push(new Employee('Naitik Gote',201000,50000, new Date()));
      this.employees.push(new Employee('Rekha Gote',201000,50000, new Date()));
      this.employees.push(new Employee('Amol Gote',201000,50000, new Date()));
    }

    updateRecord(emp : Employee){
        emp.name = emp.name + " - Updated ";
    }

    changeModel(value : any){
        console.log('change model', value);
        this.name = value;
    }

    addRecord(){
        this.employees.push(new Employee('New Record '+(this.employees.length+1),201000,50000, new Date()));
    }

}