export class CarDto{
    readonly carLicenseNumber:string;
    readonly manufacturer:string;
    readonly carModel:string;
    readonly basePrice:number;
    readonly PPH:number;
    readonly securityDeposit:number;
    readonly dateTimeFrom:Date;
    readonly dateTimeto:Date;
    readonly isBooked:Boolean
}
