import {Address} from "./Address";
import {Tenant} from "./Tenant";
import {Brand} from "./Brand";

export interface User {
  id?: any,
  firstName: string,
  lastName: string,
  address?: Address;
  email: string,
  password?: string,
  telephone?: string,
  analysis1: string,
  analysis2: string,
  analysis3: string,
  startDate: string,
  country: string,
  jobTitle: string,
  employeeId: string,
  profileImage: string,
  emailVerified: boolean,
  organisationApproved: boolean,
  tenantId?: number,
  tenant?: Tenant,
  roles?: string[]
  brands?: Brand[]
  brandRates?: [{brandId: number, rate: number, travelRate: number}]
}
