import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-avaliacao',
    templateUrl:'avaliacao.component.html',
    styleUrls:["avaliacao.component.css"]
})

export class AvaliacaoComponent implements OnInit{
    @Input()
    public avaliacao = 0;
    public icones = [];

    ngOnInit(){

        for (let i = 0;i<=4;i++){
            let minimo = i;
            let maximo = i+1;
            let nomeIcone = null;

            if (this.avaliacao<=minimo){
                nomeIcone="heart-outline";
            }

            if(this.avaliacao > minimo && this.avaliacao < maximo){
                nomeIcone="heart-half";
            }

            if (this.avaliacao >= maximo){
                nomeIcone="heart";
            }
            this.icones[i]=nomeIcone;
        }
        console.log(this.avaliacao)
    }

}
