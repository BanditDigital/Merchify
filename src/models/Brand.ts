
export interface Brand {
  id?: number;
  name: string;
  products?: object[];
  retailers?: object[];
  hourlyRate? : number;
  mileageRate: number;
  mileagePayableThreshold: number;
  travelTimeRate: number;
  travelTimePayableThreshold: number;
  tenantId?: number;
  tenant?: object;
}
