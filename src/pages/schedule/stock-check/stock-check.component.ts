import {Component} from "@angular/core";
import {LoadingController, NavParams, ViewController} from "ionic-angular";
import {AlertService} from "../../../shared/alert/alert.service";
import {Stock} from "../../../models/Stock";
import {Visit} from "../../../models/Visit";
import {ProductsService} from "../../../services/products/products.service";

@Component({
  templateUrl: 'stock-check.view.html',
  selector: 'page-stock-check-modal'
})
export class StockCheckModal {

  visit:Visit;
  type: string;

  constructor(private navParams: NavParams,
              private view: ViewController) {
    if(this.navParams.get('visit')) {

      this.visit = this.navParams.get('visit');
      this.type = this.navParams.get('type');
    }
  }

  public saveStock() {
    this.view.dismiss({ stockCheck: this.visit.stock });
  }

  public dismiss() {
    this.view.dismiss();
  }
}
