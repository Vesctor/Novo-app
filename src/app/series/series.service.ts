import { Injectable } from '@angular/core';
import { SeriesInfoComponent } from './series-info.component';

@Injectable({
    providedIn: 'root'
})

export class SeriesService{

    private series = [
        {
            id: 1,
            nome: 'Futurama',
            avaliacao: 3.3,
            dataLancamento: 'Desembro de 1979',
            temporadas: 5
        },
        {
            id: 2,
            nome: 'The Simpsons',
            avaliacao: 5,
            dataLancamento: 'Desembro de 1989',
            temporadas: 5
        },
    ];

    constructor() { }

    getAllSeries(){
        return this.series;
    }

    getAllSeriesId(id){
        let serie = null;

        for(let i=0; i<=this.series.length; i++){
            if(this.series[i].id == id){
                serie = this.series[i];
                break;
            }
        }

        return serie;
    }

    addSeries(series){
        this.series.push(series);
    }

    removerSeriePorId(id){
        for(let i=0; i<=this.series.length; i++){
            if(this.series[i].id == id){
                this.series.splice(i,1);
                break;
            }
        }
    }
    
}