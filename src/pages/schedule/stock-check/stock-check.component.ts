import {Component} from "@angular/core";
import {LoadingController, NavParams, ViewController} from "ionic-angular";
import {ProductsService} from "../../admin/products/products.service";
import {AlertService} from "../../../shared/alert/alert.service";
import {Stock} from "../../../models/Stock";
import {Visit} from "../../../models/Visit";

@Component({
  templateUrl: 'stock-check.view.html',
  selector: 'page-stock-check-modal'
})
export class StockCheckModal {

  visit:Visit;
  endOfDay: boolean = false;

  constructor(private navParams: NavParams,
              private view: ViewController,
              private error: AlertService,
              private loading: LoadingController,
              private productService: ProductsService) {
    if(this.navParams.get('visit')) {

      this.visit = this.navParams.get('visit');
      console.log(this.visit);
      this.endOfDay = this.navParams.get('sales');

      if(this.visit.stock.length == 0) {
        this.getProducts();
      }
    }
  }


  public getProducts() {
    let loading = this.loading.create({ content: 'Loading products... '});
      loading.present();
      this.productService.getProductsByBrand(this.visit.brand)
        .subscribe(products => {
          products.forEach(product => {
            let stock: Stock = {
              productId: product.id,
              visitId: this.visit.id,
              product: product,
              onHand: null,
              qtySold: null
            }
            this.visit.stock.push(stock);
          });
          loading.dismiss()
        }, error => {
          this.error.showAlert('Could not load products', error.error.message);
          loading.dismiss();
        });
  }


  public save() {
    this.view.dismiss({ stockCheck: this.visit.stock });
  }

  public dismiss() {
    this.view.dismiss();
  }
}
