import {User} from "./User";
import {Brand} from "./Brand";
import {Retailer} from "./Retailer";
import {Tenant} from "./Tenant";
import {Location} from "./Location";
import {Stock} from "./Stock";
import {Expense} from "./Expense";

export interface Visit {
  id?: number,
  scheduledArrival?: any,
  actualArrival?: any,
  actualDeparture?: any,
  siteContact?: string,
  visitNotes?: string,
  stock?: Stock[],
  user?: User,
  brand?: Brand,
  retailer?: Retailer,
  location?: Location,
  tenantId?: number,
  tenant?: Tenant,
  photo?: any,
  state?: string,
  hourlyRate?: number,
  expenses?: Expense[],
  travelTime?: number
  travelRate?: number
  approvedExpenses?: boolean,
  paidExpenses?: boolean

}
