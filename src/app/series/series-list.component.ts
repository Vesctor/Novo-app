import { SeriesService } from './series.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-series-list',
    templateUrl:'series-list.component.html'
})

export class SeriesListComponent {
    public series = [];
    
    constructor(private seriesService: SeriesService){}

    ionVewWillEnter(){
        this.series=this.seriesService.getAllSeries();
    }

    removerSerie(id){
        this.seriesService.removerSeriePorId(id);
    }

    salvarNavegador(){
        this.seriesService.salvarNavegador();
    }

    pegarNavegador(){
        this.seriesService.pegarNavegador();
    }
}