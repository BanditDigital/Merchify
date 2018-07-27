import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'groupBy',
  pure: false
})
export class GroupByPipe implements PipeTransform {
  transform(value: any, groupByKey: string) {
    const events: any[] = [];
    const groupedElements: any = {};

    value.forEach((obj: any) => {
      if (!(obj[groupByKey] in groupedElements)) {
        groupedElements[obj[groupByKey]] = [];
      }
      groupedElements[obj[groupByKey]].push(obj);
      groupedElements[obj[groupByKey]].sort((a,b) => {

        if(!a.actualArrival && !b.actualArrival ||
          ((a.actualArrival || b.actualArrival) && (!a.actualDeparture || !b.actualArrival))) {
          return new Date(a.scheduledArrival) < new Date(b.scheduledArrival) ? -1 : 1;
        }

        if(a.actualArrival || b.actualArrival) {
          return new Date(a.actualArrival) < new Date(b.actualArrival) ? 1 : -1;
        }

      });
    });

    for (let prop in groupedElements) {
      if (groupedElements.hasOwnProperty(prop)) {
        events.push({
          key: prop,
          list: groupedElements[prop]
        });
      }
    }

    events.sort((a, b) => {
      if(a.key == 'Checked In') {
        return -1;
      } else if (a.key == 'Scheduled') {
        return 0;
      } else {
        return 1;
      }
    });

    return events;
  }
}
