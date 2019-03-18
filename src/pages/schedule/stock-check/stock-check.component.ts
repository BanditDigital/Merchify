import {Component} from "@angular/core";
import {LoadingController, NavParams, ViewController} from "ionic-angular";
import {AlertService} from "../../../shared/alert/alert.service";
import {Stock} from "../../../models/Stock";
import {Visit} from "../../../models/Visit";
import {ProductsService} from "../../../services/products/products.service";
import {AuthService} from "../../auth/auth.service";

@Component({
  templateUrl: 'stock-check.view.html',
  selector: 'page-stock-check-modal'
})
export class StockCheckModal {

  visit:Visit;
  type: string;

  constructor(private navParams: NavParams,
              private view: ViewController,
              private auth: AuthService) {
    if(this.navParams.get('visit')) {

      this.visit = this.navParams.get('visit');
      this.type = this.navParams.get('type');
    }
  }

  public isAdmin() {
    return this.auth.isAdmin();
  }

  public saveStock() {
    this.view.dismiss({ stockCheck: this.visit });
  }

  public dismiss() {
    this.view.dismiss();
  }
}
