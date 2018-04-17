import {Injectable} from "@angular/core";
import {AlertController} from "ionic-angular";

@Injectable()
export class AlertService {
  constructor(private alertController: AlertController) {}

  public showAlert(title, message) {
    this.alertController.create({
      title,
      message,
      buttons: [{
        text: 'Okay'
      }]
    }).present();
  }
}
