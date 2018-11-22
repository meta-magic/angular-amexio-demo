import { PipeTransform, Injectable, Pipe } from "@angular/core";

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform{
    transform(data : any[], field: string, filtervalue: string){

        if(!data)
            return [];

        if(!field || !filtervalue)
            return data;

        return data.filter((item) =>
            item[field].toLowerCase().includes(filtervalue.toLowerCase()),);
        

    }
}