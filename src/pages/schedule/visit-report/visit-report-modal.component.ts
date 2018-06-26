import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Visit} from "../../../models/Visit";
import * as moment from 'moment';

@Component({
  templateUrl: 'visit-report-modal.view.html',
  selector: 'page-visit-report-modal'
})
export class VisitReportModal {

  visit: Visit;

  constructor(private navParams: NavParams,
              private view: ViewController) {
    this.visit = this.navParams.get('visit');
  }

  public timeSpent(arrival, departure) {
    return moment(arrival).diff(departure, 'hours', true).toFixed(2);
  }

  public dismiss() {
    this.view.dismiss();
  }

  public totalSales() {
    let total = 0;
    for(let check of this.visit.stock) {
      total += check.qtySold * check.product.retailPrice;
    }
    return total;
  }
}
