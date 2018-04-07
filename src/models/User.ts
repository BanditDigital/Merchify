export interface User {
  id: any,
  firstName: string,
  lastName: string,
  address1: string,
  address2: string,
  town: string,
  city: string,
  postcode: string,
  email: string,
  telephone: string,
  analysis1: string,
  analysis2: string,
  analysis3: string,
  startDate: Date,
  country: string,
  hourlyRate: number,
  jobTitle: string,
  profileImage: string,
  accountStatus: string,
  //TODO - Strong typing
  roles: Array<any>,
  //TODO - Strong typing
  brands: Array<any>,
  //ToDO - Strong typing
  tenant: any;



}
