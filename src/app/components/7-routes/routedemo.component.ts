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
        debugger;
        this.route.navigate([link]);
    }

}