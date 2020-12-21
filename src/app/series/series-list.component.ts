import { SeriesService } from './series.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-series-list',
    templateUrl:'series-list.component.html'
})

export class SeriesListComponent implements OnInit{
    public series = [];
    
    constructor(private seriesService: SeriesService){}

    ngOnInit(){
        this.series=this.seriesService.getAllSeries();
    }

    removerSerie(id){
        this.seriesService.removerSeriePorId(id);
    }
}