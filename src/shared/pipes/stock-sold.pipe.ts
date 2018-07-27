import {Pipe, PipeTransform} from "@angular/core";
import * as _ from 'lodash';
import {Stock} from "../../models/Stock";

@Pipe({name: 'stockSold', pure: false})
export class StockSoldPipe implements PipeTransform {
  transform(stock: Stock[], sold: boolean): Stock[] {
    if(sold) {
      return _.filter(stock, item => {
        if(item.onHand > 0) {
          return item;
        }
      });
    } else {
      return stock;
    }

  }
}
