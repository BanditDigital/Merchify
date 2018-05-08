import {Address} from "./Address";
import {User} from "./User";

export interface Tenant {
  id: number,
  name: string,
  address: Address,
  accessCode: string;
  userCount: number,
  users: User[];
}
