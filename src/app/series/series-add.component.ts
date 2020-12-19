import { Component,OnInit } from "@angular/core";
import { SeriesService } from "./series.service";
import { Router } from '@angular/router'

@Component({
    selector: 'app-series-add',
    templateUrl:'series-add.component.html'
})

export class SeriesAddComponent implements OnInit{
    
    public serie = {};

    constructor(private seriesService: SeriesService, private router: Router){}
    
    ngOnInit(){
        
    }

    vaiFormulario(){
        this.seriesService.addSeries(this.serie);
        this.router.navigate(['/series']);
    }
}