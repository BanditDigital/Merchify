import {Address} from "./Address";
import {Tenant} from "./Tenant";

export interface User {
  id?: any,
  firstName: string,
  lastName: string,
  address: Address;
  email: string,
  password?: string,
  telephone: string,
  analysis1: string,
  analysis2: string,
  analysis3: string,
  startDate: Date,
  country: string,
  hourlyRate: number,
  jobTitle: string,
  employeeId: string,
  profileImage: string,
  emailVerified: boolean,
  organisationApproved: boolean,
  tenantId?: number,
  tenant?: Tenant
}
