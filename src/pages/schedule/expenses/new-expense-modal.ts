import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Expense} from "../../../models/Expense";

@Component({
  selector: 'page-new-expense-modal',
  templateUrl: 'new-expense-modal.html'
})
export class NewExpenseModal {

  expense: Expense;

  constructor(private navParms: NavParams,
              private view: ViewController) {
    this.expense = this.navParms.get('expense');
  }

  save() {
    this.view.dismiss({ expense: this.expense, delete: false });
  }

  deleteExpense() {
    this.view.dismiss({ expense: this.expense, delete: true });
  }

}
