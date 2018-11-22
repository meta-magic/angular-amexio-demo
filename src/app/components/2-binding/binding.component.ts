import { Component } from "@angular/core";

@Component({
    selector : 'binding',
    templateUrl :'binding.component.html'
})
export class BindingComponent {

    title = "Binding Demo";

    image : string;

    colspan = 4;

    disabled : boolean = false;

    constructor() {
        this.image = 'https://testapi.amexio.org/api/v5.3/assets/images/logos/amexio-logo.png'
    }

    onClick($event){
        console.log('On Click on button', event);
        //$event.stopPropagation(); to stop propagation of events.
    }

    onDivClicked(event:any){
        console.log('On Div Click ', event);
    }

    onEventFilter(msg: string){
        console.log('On Event Filter ',msg);
    }

    templateRef(input:any){
        console.log('Input template ref : ',input.value);
    }
}