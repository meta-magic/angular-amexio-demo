import { Component } from '@angular/core';

@Component({
    selector: 'd3-chart-demo',
    templateUrl: 'd3chart.component.html'
})
export class D3ChartComponent {
    userDefineColorData: any;
    userDefineColors: any;

    constructor() {
        
        this.userDefineColors =
            [
                "#4040a1",
                "#e06377",
                " #7e4a35",
                "#6b5b95",
                "#feb236",
                "#d64161",
                "#ff7b25"
            ]

        this.userDefineColorData =
            [
                ['city', 'population'],
                ['Mumbai', 94423],
                ['Kochi', 69932],
                ['Delhi', 91345],
                ['Chennai', 46467],
                ['Pune', 31244],
                ['Jaipur', 30461],
                ['Ranchi', 84436]
            ];
    }

}