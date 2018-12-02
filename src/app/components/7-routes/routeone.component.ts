import { OnInit, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'route-one',
    template : `
        Route One
    `
})
export class RouteOneDemoComponent implements OnInit{

    constructor(private rla: ActivatedRoute){
        
    }

    ngOnInit(){
        this.rla.queryParamMap.subscribe((params)=>{
            console.log("****PARAMS****"+JSON.stringify(params));
        })

    }
}