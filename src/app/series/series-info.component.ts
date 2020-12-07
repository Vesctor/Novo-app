import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from './series.service';

@Component({
    selector: 'app-series-info',
    templateUrl:'series-info.component.html'
})

export class SeriesInfoComponent implements OnInit{

    private id : String;
    private serie;

    constructor(private activatedRoute: ActivatedRoute, private seriesService: SeriesService){}

    ngOnInit(){
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.serie = this.seriesService.getAllSeriesId(id);
    }
}
