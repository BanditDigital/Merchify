import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Brand} from "../../../models/Brand";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Account} from "../../../models/Account";

@Component({
  selector: 'modal-brand',
  templateUrl: 'account-modal.html'
})
export class AccountModal {

  account: Account = null;
  accountForm: FormGroup;

  constructor(private navParams: NavParams,
              private fb: FormBuilder,
              private viewCtrl: ViewController) {

    //Grab the account object passed in from the caller
    this.account = this.navParams.get('account');

    //Initialise form
    this.initialiseForm(this.account);
  }

  initialiseForm(account?: Account) {
    this.accountForm = this.fb.group({
      name: [account ? account.name : ''],
    });
  }

  save(form: FormGroup) {
    if(!this.account) {
      this.account = form.value;
    } else {
      this.account.name = form.value.name;
    }
    this.viewCtrl.dismiss(this.account);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
