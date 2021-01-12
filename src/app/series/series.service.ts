import { Injectable } from '@angular/core';
import { SeriesInfoComponent } from './series-info.component';

import { Storage } from '@ionic/storage';
import{ v4 as uuidv4 } from 'uuid';

@Injectable({
    providedIn: 'root'
})

export class SeriesService{

    constructor(private storage: Storage){}

    salvarNavegador(){
        this.storage.set('teste', '123');
    }

    pegarNavegador(){
        this.storage.get('teste').then(valor =>{
            console.log('O resultado é de', valor);
        });
    }

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

    getAllSeries(){

        this.storage.forEach((elemento) =>{
            this.series.push(JSON.parse(elemento))
        })
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
        if(series.id == null){
            series.id = uuidv4();
            this.storage.set(series.id, JSON.stringify(series));
            //this.series.push(series);
        } else{
            this.atualizarSerie(series);
        }
    }

    atualizarSerie(series){

        let serie = null;

        for(let i=0; i<=this.series.length; i++){
            if(this.series[i].id == serie.id){
                this.series[i] = serie;
                break;
            }
        }
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