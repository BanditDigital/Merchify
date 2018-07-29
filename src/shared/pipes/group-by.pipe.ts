import { Pipe, PipeTransform } from '@angular/core';

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

    events.sort((a,b) => {
      let aStatus = 0;
      if(a.key == 'Checked In') {
        aStatus = -1;
      } else if (a.key == 'Scheduled') {
        aStatus = 0;
      } else if (a.key == 'Completed') {
        aStatus = 1;
      }

      let bStatus = 0;
      if(b.key == 'Checked In') {
        bStatus = -1;
      } else if (b.key == 'Scheduled') {
        bStatus = 0;
      } else if (b.key == 'Completed') {
        bStatus = 1;
      }

      return aStatus - bStatus;
    });

    return events;
  }
}
