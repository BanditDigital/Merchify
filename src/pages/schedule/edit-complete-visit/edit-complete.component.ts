import {Component} from "@angular/core";
import {LoadingController, NavParams, ToastController, ViewController} from "ionic-angular";
import {Visit} from "../../../models/Visit";
import * as moment from 'moment';
import {ScheduleService} from "../schedule.service";

@Component({
  selector: 'page-edit-complete',
  templateUrl: 'edit.complete.html'
})
export class EditCompleteComponent {

  visit: Visit;

  constructor(private navParams: NavParams,
              private view: ViewController,
              private scheduleService: ScheduleService,
              private toast: ToastController,
              private loading: LoadingController) {
    this.visit = this.navParams.get('visit');
    this.visit.actualArrival = moment(this.visit.actualArrival).local().toISOString(true);
    this.visit.actualDeparture = moment(this.visit.actualDeparture).local().toISOString(true);
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


  public saveVisit() {

    this.visit.actualArrival = moment(<string>this.visit.actualArrival).utc().toString();
    this.visit.actualDeparture = moment(<string>this.visit.actualDeparture).utc().toString();
    let loading = this.loading.create({content: 'Checking in...'});
    loading.present();
    this.scheduleService.editVisit(this.visit)
      .subscribe(success => {
        if(success) {
          loading.dismiss();
          this.toast.create({
            message: 'Visit updated successfully',
            duration: 3000,
            position: 'top'
          }).present();
        }
      }, error => {
        loading.dismiss();
         this.toast.create({
            message: 'Could not update visit',
            duration: 3000,
            position: 'top'
          }).present();
      });

  }

}

