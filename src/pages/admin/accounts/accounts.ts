import {Component} from "@angular/core";
import {AlertController, LoadingController, ModalController, NavController} from "ionic-angular";
import {AlertService} from "../../../shared/alert/alert.service";
import {AccountService} from "./account.service";
import {AccountModal} from "./account-modal";
import {Account} from "../../../models/Account";

import * as _ from 'lodash';
import {LocationsPage} from "../locations/locations";

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html'
})
export class AccountsPage {

  accounts: Account[] = [];

  constructor(private accountService: AccountService,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private navCtrl: NavController,
              private errorAlert: AlertService,
              private loadingCtrl: LoadingController) {
    this.getAll();
  }

  public create() {
    let createModal = this.modalCtrl.create(AccountModal, {});
    let loading = this.loadingCtrl.create({content: 'Creating account...'});

    createModal.onDidDismiss(data => {
      if (data) {
        loading.present();
        this.accountService.addAccount(data)
          .subscribe(success => {
            this.accounts.push(success);
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not add account', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }

        public delete(account: Account) {
    let loading = this.loadingCtrl.create({content: 'Deleting account...'});
    let confirm = this.alertCtrl.create({
      title: `Confirm delete`,
      message: `Are you sure you want to delete ${account.name}, you will not be able to undo this action?`,
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes, delete it!',
          handler: () => {
            loading.present();
            this.accountService.deleteAccount(account)
              .subscribe(success => {
                _.pull(this.accounts, account);
                loading.dismiss();
              }, error => {
                this.errorAlert.showAlert('Could not delete account', error.error.message);
                loading.dismiss();
              });
          }
        }
      ]
    });
    confirm.present();
  }

  public edit(account: Account) {
    let createModal = this.modalCtrl.create(AccountModal, {account: account});
    let loading = this.loadingCtrl.create({content: 'Updating account...'});

    createModal.onDidDismiss(data => {
      if (data) {
        loading.present();
        this.accountService.editAccount(data)
          .subscribe(success => {
            _.pull(this.accounts, data);
            this.accounts.push(success);
            loading.dismiss();
          }, error => {
            this.errorAlert.showAlert('Could not edit account', error.error.message);
            loading.dismiss();
          })
      }
    });

    createModal.present();
  }

  public getAll() {
    let loading = this.loadingCtrl.create({content: 'Getting accounts...'});

    loading.present();
    this.accountService.getAccounts()
      .subscribe(accounts => {
        this.accounts = accounts;
        loading.dismiss();
      }, error => {
        this.errorAlert.showAlert('Could not get accounts', error.error.message);
        loading.dismiss();
      });
  }

  openLocations(account: Account) {
    this.navCtrl.push(LocationsPage, {account: account});
  }

}
