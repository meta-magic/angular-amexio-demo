import { Directive, Input, ElementRef, HostBinding, HostListener, ViewChild, Output, EventEmitter } from "@angular/core";
import { NgModel } from "@angular/forms";

@Directive({
    selector: '[input-format]'
})
export class InputFormatDirective {

    @Input('input-format') inputformat: string;

    @ViewChild(NgModel) model : NgModel;

    @Output() ngModelChange = new EventEmitter();
    
    constructor(private el: ElementRef) {

    }

    @HostListener('blur', ["$event.target.value"]) 
    onBlur() {
        debugger;
        let value: string = this.el.nativeElement.value;
        this.el.nativeElement.value = value.toUpperCase();
        this.ngModelChange.emit(this.el.nativeElement.value);
        console.log('value ', value, " format", this.inputformat);
    }
}