import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";


@Component({
  templateUrl: 'visit-action-modal.view.html',
  selector: 'visit-action-modal'
})
export class VisitActionModal {

  notes: String = '';

  constructor(private view: ViewController,
              private navParams: NavParams) {

    if(this.navParams.get('notes')) {
      this.notes = this.navParams.get('notes');
    }
  }

  public save() {
    this.view.dismiss({ notes: this.notes });
  }

  public dismiss() {
    this.view.dismiss();
  }

}
