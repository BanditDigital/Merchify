import * as moment from 'moment';
import {Component} from "@angular/core";
import {Brand} from "../../../models/Brand";
import {Retailer} from "../../../models/Retailer";
import {LoadingController, NavParams, ViewController} from "ionic-angular";
import {AlertService} from "../../../shared/alert/alert.service";
import {RetailerService} from "../../admin/retailer/retailer.service";
import {BrandsService} from "../../admin/brand/brands.service";
import {ScheduleService} from "../schedule.service";
import {Visit} from "../../../models/Visit";
import {User} from "../../../models/User";
import * as jwt from 'jsonwebtoken';
import {Location} from "../../../models/Location";
import {Storage} from "@ionic/storage";

@Component({
  templateUrl: 'schedule-new-modal.view.html',
  selector: 'page-schedule-new-modal'
})
export class ScheduleNewModal {

  brands: Brand[] = [];
  retailers: Retailer[] = [];
  locations: Location[] = [];

  edit:boolean = false;
  public visit: Visit = {
    scheduledArrival : moment().toISOString(),
    brand: null
  }

  constructor(private view: ViewController,
              private storageService: Storage,
              private loadingCtrl: LoadingController,
              private errorAlert: AlertService,
              private retailerService: RetailerService,
              private brandService: BrandsService,
              private scheduleService: ScheduleService,
              private navParams: NavParams) {

    if(this.navParams.get('visit')) {
      this.visit = this.navParams.get('visit');
      this.edit = this.navParams.get('edit');
    }

    this.setup();
  }

  public dismiss() {
    this.view.dismiss();
  }

  public setup() {
    let loading = this.loadingCtrl.create({content: 'Getting available brands...'});
    loading.present();
    this.storageService.get('token')
      .then(token => {
        let decoded = <User> jwt.decode(token);
        console.log(decoded.brands);
        this.brands = decoded.brands;
        this.visit.user = decoded;
        if(this.edit) {
          this.setupEdit();
        }
        loading.dismiss();
      }).catch(error => {
        this.errorAlert.showAlert('Could not load available brands', error.message);
    });
  }

  public setupEdit() {
    let loading = this.loadingCtrl.create({content: 'Getting available retailers & locations...'});
    loading.present();
    this.brandService.getBrand(this.visit.brand.id)
      .subscribe(brand => {
        this.retailers = <Retailer[]> brand.retailers;

        this.retailerService.getRetailerById(this.visit.retailer.id)
          .subscribe(retailer => {
            this.locations = retailer.locations;
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not load available locations', error.error.message);
            loading.dismiss();
          });

      }, error => {
        this.errorAlert.showAlert('Could not load available retailers', error.error.message);
        loading.dismiss();
      });
  }

  public brandSelected(ev) {
    let loading = this.loadingCtrl.create({content: 'Getting available retailers...'});
    loading.present();
    this.brandService.getBrand(ev.id)
      .subscribe(brand => {
        this.retailers = <Retailer[]> brand.retailers;
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not load available retailers', error.error.message);
        loading.dismiss();
      });
  }

  public retailerSelected(ev) {
    let loading = this.loadingCtrl.create({content: 'Getting available locations...'});
    loading.present();
    this.retailerService.getRetailerById(ev.id)
      .subscribe(retailer => {
        this.locations = retailer.locations;
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not load available locations', error.error.message);
        loading.dismiss();
      });
  }

  public save() {

    if(!this.edit) {
      this.visit.scheduledArrival = moment(this.visit.scheduledArrival.toString()).format('YYYY-MM-DD');
      this.scheduleService.addVisit(this.visit)
        .subscribe(visit => {
          if(visit) {
            this.view.dismiss({visit: visit, edited: false});
          }
        }, error => {
          this.errorAlert.showAlert('Could not edit visit', error.error.message);
        });
    }

    if(this.edit) {
      this.scheduleService.editVisit(this.visit)
        .subscribe(visit => {
          if(visit) {
            this.view.dismiss({visit: visit, edited: true});
          }
        }, error => {
          this.errorAlert.showAlert('Could not schedule new visit', error.error.message);
        });
    }

  }

  compareFn(e1, e2): boolean {
      return e1 && e2 ? e1.id === e2.id : e1 === e2;

  }

  isValid() {
    return !this.visit.brand || !this.visit.retailer || !this.visit.location;
  }

}
