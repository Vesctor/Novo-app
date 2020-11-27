import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-avaliacao',
    templateUrl:'avaliacao.component.html'
})

export class AvaliacaoComponent implements OnInit{
    @Input()
    public nota=[{
        id:1,
        nota:["heart"]
    },
    {
        id:2,
        nota:["heart","heart"]
    },
    {
        id:3,
        nota:["heart","heart","heart"]
    },
    {
        id:4,
        nota:["heart","heart","heart","heart"]
    },
    {
        id:5,
        nota:["heart","heart","heart","heart","heart"]
    }
    ];
    
    public icones ="heart";

    ngOnInit(){
        console.log(this.nota);
    }

}