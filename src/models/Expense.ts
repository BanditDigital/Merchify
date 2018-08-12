import {Visit} from "./Visit";

export interface Expense {
  id?: number,
  expenseDate?: string,
  description?: string,
  amount?: number,
  visitId?: number,
  visit?: Visit
}
