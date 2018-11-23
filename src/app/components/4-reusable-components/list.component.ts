import { Component, Input, Output, EventEmitter, ViewEncapsulation, ContentChild, TemplateRef } from "@angular/core";

@Component({
    selector : 'list-component',
    templateUrl : 'list.component.html',
    styleUrls : ['list.component.css']
})
export class ListComponent<T> {

    @Input('data') data : T [];

    @Input('display-field') displayfield : string;

    @Output('onClick') onClick = new EventEmitter<T>();

    @ContentChild('listtemplate') listtemplate : TemplateRef<T>;
    
    
    rowClick(data:any){
        this.onClick.emit(data);
    }
}