export class Employee {
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