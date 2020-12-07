import { SeriesService } from './series.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-series-list',
    templateUrl:'series-list.component.html'
})

export class SeriesListComponent{
    public series = [];
    
    constructor(private seriesService: SeriesService){}

    ngOnInit(){
        this.seriesService.getAllSeries();
    }
}