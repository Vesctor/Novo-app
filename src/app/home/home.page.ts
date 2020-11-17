import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public num1 : number;
  public num2 : number;
  public total : number;

  public operacao: string;

  constructor(public alertController: AlertController) {}

  async vaiFormulario() {

    console.log(this.operacao)

    //template strings!
    //let total = this.num1 + this.num2;
    //const texto = `O valor total da soma é : ${total}`

    switch(this.operacao){
      case 'A':
        this.total = this.num1+this.num2;
      break;
      case 'S':
        this.total = this.num1-this.num2;
      break;
      case 'M':
        this.total = this.num1*this.num2;
      break;
      case 'D':
        this.total = this.num1/this.num2;
      break;
      default:
        console.log('Nenhuma operação escolhida')
    }

    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `O resultado da operação é : ${this.total}`,
      buttons: ['Vai']
    });
    await alert.present();
  }
}
