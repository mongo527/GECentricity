// import { IAllergyData } from '../interfaces/interfaces';
import { IOrderData } from '../interfaces/interfaces';

export class OrderList implements IOrderData {

    private data: Array<string> = (this._value == null) ? [] : this._value.split('^');

    description = (this.data.length > 0) ? this.data[0] : '';
    type = (this.data.length > 0) ? this.data[1] : '';
    code = (this.data.length > 0) ? this.data[2] : '';
    startDate = (this.data.length > 0) ? this.data[3] : '';
    endDate = (this.data.length > 0) ? this.data[4] : '';
    diagnosisDescription = (this.data.length > 0) ? this.data[5] : '';
    diagnosisCode = (this.data.length > 0) ? this.data[6] : '';
    comments = (this.data.length > 0) ? this.data[7] : '';
    priority = (this.data.length > 0) ? this.data[11] : '';
    provider = (this.data.length > 0) ? this.data[12] : '';
    providerSpecialty = (this.data.length > 0) ? this.data[13] : '';
    providerOrganization = (this.data.length > 0) ? this.data[14] : '';
    providerAddress = (this.data.length > 0) ? this.data[15] : '';
    providerPhone = (this.data.length > 0) ? this.data[16] : '';
    authorizationNumber = (this.data.length > 0) ? this.data[17] : '';
    adminComments = (this.data.length > 0) ? this.data[18] : '';
    status = (this.data.length > 0) ? this.data[19] : '';
    signedStatus = (this.data.length > 0) ? this.data[21] : '';
    modifierCode = (this.data.length > 0) ? this.data[22] : '';
    modifierDescription = (this.data.length > 0) ? this.data[23] : '';
    orderNumber = (this.data.length > 0) ? this.data[24] : '';
    diagnosisIcd10 = (this.data.length > 0) ? this.data[25] : '';

    constructor(
        public _value: string
    ) { }
}