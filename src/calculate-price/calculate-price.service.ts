import { Injectable ,HttpException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ICar} from '../interfaces/car.interface'

@Injectable()
export class CalculatePriceService {

    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}



    /* return price */

    public  async getPrice(toDateTime:Date,fromDateTime:Date,cardId:String):Promise<any>{
    let diff =(toDateTime.getTime() - fromDateTime.getTime()) / 1000;
      diff /= (60 * 60);
    let totalHours= Math.abs(Math.round(diff));
    const cars=this.carModel.find({cardId}).exec();
   // const cars = this.carModel.find({ "carLicenseNumber":cardId }).exec();
    let res= (cars[0].PPH) *totalHours;
    return res;
    }


}
