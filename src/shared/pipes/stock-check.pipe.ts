import {Pipe, PipeTransform} from '@angular/core';
import {Stock} from "../../models/Stock";
@Pipe ({
  name : 'stock'
})
export class StockCheckPipe implements PipeTransform {
  transform(stock : Stock[], params) : Stock[] {
    let type = params;

    let items = [];

    if(type == 'stock') {
      stock.filter(item => {
        if(item.onHand) {
          items.push(item);
        }
      });
    }

    if(type == 'eod') {
      stock.filter(item => {
        if(item.qtySold) {
          items.push(item);
        }
      });
    }

    return items;
  }
}
