import { OnInit, Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'route-demo',
    templateUrl : 'routedemo.component.html'
})
export class RouteDemoComponent implements OnInit{

    constructor(private route : Router){

    }

    ngOnInit(){

    }

    navigate(link : string){
        this.route.navigate([link,'1','2']);
    }

}