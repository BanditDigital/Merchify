import {Pipe, PipeTransform} from "@angular/core";
import {Visit} from "../../models/Visit";
import * as _ from 'lodash';

@Pipe({name: 'visitStatus', pure: false})
export class VisitStatusPipe implements PipeTransform {
  transform(visits: Visit[], status: string): Visit[] {
    switch(status) {
      case 'scheduled' : {
        return _.filter(visits, (v) => {
          return v.actualArrival == null && v.actualDeparture == null;
        });
      }
      case 'completed' : {
        return _.filter(visits, (v) => {
          return v.actualArrival != null && v.actualDeparture != null;
        });
      }
      case 'active' : {
        return _.filter(visits, (v) => {
          return v.actualArrival != null && v.actualDeparture == null;
        });
      }
    }
  }
}
