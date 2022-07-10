export enum PersonType {
    SET_ALL = '[Person] set all'
}

export class PersonSetAllActionNgxs {
    static readonly type = PersonType.SET_ALL;
    constructor(public payload: { 
        liscenceNumber: string;
        firstName: string;
        lastName: string;
        phone: string;
        yearOld: string;
        address: string;
     }) { }
  }
  

  export type PersonActions = PersonSetAllActionNgxs;