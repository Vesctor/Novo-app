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

  public operacao: string;

  constructor(public alertController: AlertController) {}

  async vaiFormulario() {

    console.log(this.operacao)

    //template strings!
    let total = this.num1 + this.num2;
    const texto = `O valor total da soma é : ${total}`

    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: texto,
      buttons: ['Vai']
    });
    await alert.present();
  }
}
