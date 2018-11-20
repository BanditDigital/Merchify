import {Component, OnInit} from "@angular/core";
import {LoadingController, ModalController, NavController, NavParams, ViewController} from "ionic-angular";
import {Visit} from "../../../models/Visit";
import * as moment from 'moment';
import {Expense} from "../../../models/Expense";
import {NewExpenseModal} from "./new-expense-modal";
import {ScheduleService} from "../schedule.service";
import {AlertService} from "../../../shared/alert/alert.service";

@Component({
  templateUrl: 'expenses-modal.view.html',
  selector: 'page-expenses-modal'
})
export class ExpensesModal implements OnInit {

  visit: Visit;
  cols: any[];
  selectedExpense: Expense;
  newExpense: boolean;
  displayDialog: boolean;
  expense: Expense;

  constructor(private navParams: NavParams,
              private view: ViewController,
              private modal: ModalController,
              private scheduleService: ScheduleService,
              private nav: NavController,
              private loading: LoadingController,
              private error: AlertService) {
    this.visit = this.navParams.get('visit');
  }

  showDialogToAdd() {
    this.newExpense = true;

    let newExpense: Expense = {
      amount: 0,
      description: '',
      expenseDate: moment(this.visit.actualArrival).format('YYYY-MM-DD'),
      visitId: this.visit.id
    };

    let modal = this.modal.create(NewExpenseModal, { expense: newExpense}, { enableBackdropDismiss: false });
    modal.onDidDismiss(data => {
      if(data.expense && !data.delete) {
        this.expense = data.expense;
        this.save();
      }
    });
    modal.present();
  }

  onRowSelect(event) {
    if(!this.visit.paidExpenses && !this.visit.approvedExpenses) {
      let modal = this.modal.create(NewExpenseModal, { expense: event.data }, { enableBackdropDismiss: false });
      modal.onDidDismiss(data => {
        if(data.expense && !data.delete) {
          this.expense = data.expense;
        } else if (data.expense && data.delete) {
          this.delete(data.expense);
        }
      });
      modal.present();
    }

  }

  save() {
    let expenses = [...this.visit.expenses];
    if (this.newExpense)
      expenses.push(this.expense);
    else
      expenses[this.visit.expenses.indexOf(this.selectedExpense)] = this.expense;

    this.visit.expenses = expenses;
    this.expense = null;
    this.displayDialog = false;
  }

  delete(expense) {
    let index = this.visit.expenses.indexOf(expense);
    this.visit.expenses = this.visit.expenses.filter((val, i) => i != index);
    this.expense = null;
    this.displayDialog = false;
  }

  public dismiss() {
    this.view.dismiss();
  }

  public saveAndClose() {
    let loading = this.loading.create({content: 'Checking in...'});
    loading.present();
    this.scheduleService.editVisit(this.visit)
      .subscribe(success => {
        if(success) {
          this.nav.popToRoot();
          loading.dismiss();
        }
      }, error => {
        loading.dismiss();
        this.error.showAlert('Could not update expenses', error.error.message);
      });

  }

  ngOnInit(): void {
    this.cols = [
      { field: 'expenseDate', header: 'Date'},
      { field: 'description', header: 'Description'},
      { field: 'amount', header: 'Amount' },
    ]
  }

  expensesTotal() {
    let total = 0;
    this.visit.expenses.forEach(ex => {
      total = +total + +ex.amount;
    })
    return total;
  }

}
