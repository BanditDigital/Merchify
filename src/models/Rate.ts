import {User} from './User';
import {Brand} from './Brand';
import {Tenant} from './Tenant';

export interface Rate {
    id?: number;
    user?: User;
    userId?: number;
    brand?: Brand;
    brandId?: number;
    hourlyRate?: number;
    mileageRate?: number;
    mileagePayableThreshold?: number;
    travelTimeRate?: number;
    travelTimePayableThreshold?: number;
    tenantId?: number;
    tenant?: Tenant;
}
