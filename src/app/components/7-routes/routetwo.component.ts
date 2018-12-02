import { OnInit, Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector : 'route-two',
    templateUrl : 'routetwo.component.html'
})
export class RouteTwoDemoComponent implements OnInit{

    
    constructor(private rla : ActivatedRoute){

    }

    ngOnInit(){
        this.rla.params.subscribe((params)=>{
            console.log("****PARAMS****"+JSON.stringify(params));
        })

    }
 
}