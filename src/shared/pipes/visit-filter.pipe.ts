import {Pipe, PipeTransform} from "@angular/core";
import {Visit} from "../../models/Visit";
import * as _ from 'lodash';

@Pipe({
  name: 'searchVisits'
})
export class VisitFilterPipe implements PipeTransform {
  transform(visits: Visit[], params) {

    let userInput = params.userInput;
    let showCompleted = params.showCompleted;
    let showScheduled = params.showScheduled;

    let checked = _.filter(visits, visit => {
      if (visit.state == 'Checked In') {
        return true;
      }
    });

    let filtered = _.concat(checked, _.filter(visits, visit => {
      if (showCompleted && visit.state == 'Completed') {
        return true;
      }
    }));

    let final = _.concat(filtered , _.filter(visits,visit => {
      if(showScheduled && visit.state == 'Scheduled') {
        return true;
      }
    }));

    visits = _.filter(final, visit => {
      if(userInput == '' || !userInput) {
        return true;
      }

      return (visit.retailer.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
        || visit.user.firstName.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
        || visit.user.lastName.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
        || visit.brand.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
        || visit.location.name.toLocaleLowerCase().includes(userInput.toLocaleLowerCase()));
    });

    return visits;
  }
}
