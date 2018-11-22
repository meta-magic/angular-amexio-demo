import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
    selector : 'greetings',
    templateUrl : 'greetings.component.html'
})
export class GreetingsComponent implements OnInit, AfterViewInit, OnDestroy {

    constructor(){
        console.log("Inside Constructor");
    }

    ngOnInit(){
        console.log("Inside ngOnInit");
    }

    ngAfterViewInit(){
        console.log("Inside ngAfterViewInit");
    }

    ngOnDestroy(){
        console.log("Inside ngOnDestroy");
    }
}