import { OnInit, Component } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
    selector : 'form-demo',
    templateUrl : 'form.component.html'
})
export class FormDemoComponent implements OnInit {

    model : TemplateModel;
    employeeForm: FormGroup;


    constructor(private fb: FormBuilder){
        this.model = new TemplateModel();

        this.employeeForm = this.fb.group({
            'FirstName' : ['',[Validators.required]],
            'LastName' : ['',[Validators.required]]
        })
    }

    ngOnInit(){

    }
}

class TemplateModel{
    firstName : string;
    lastName  : string;
}