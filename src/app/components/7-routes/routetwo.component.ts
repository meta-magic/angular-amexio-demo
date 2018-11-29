import { OnInit, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'route-two',
    templateUrl : 'routetwo.component.html'
})
export class RouteTwoDemoComponent implements OnInit{

    
    constructor(private route : Router){

    }

    ngOnInit(){

    }
 
}