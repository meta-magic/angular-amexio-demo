import { Component } from "@angular/core";

@Component({
    selector : 'pipedemo',
    templateUrl : 'pipe.component.html'
})
export class PipeComponent {

    emp : Employee;
    employees : Employee [];
    filter : string;
    
    constructor(){
        this.emp = new Employee('John Doe',201000,50000, new Date());
        this.employees = [];
        this.employees.push(this.emp);
        this.employees.push(new Employee('Ketan Gote',201000,50000, new Date()));
        this.employees.push(new Employee('Naitik Gote',201000,50000, new Date()));
        this.employees.push(new Employee('Rekha Gote',201000,50000, new Date()));
        this.employees.push(new Employee('Amol Gote',201000,50000, new Date()));
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