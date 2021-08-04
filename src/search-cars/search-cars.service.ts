import { Injectable ,HttpException} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {ICar} from '../interfaces/car.interface';
// import {IRental} from


@Injectable()
export class SearchCarsService {


    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}


    /* return all free cars */

    public getCars(){ 
            const cars=this.carModel.find({"isBooked":false}).exec();
            return cars;
    }

   
    public  async getCarbyId(toDateTime:Date,fromDateTime:Date):Promise<any>{
      const freecars=this.carModel.find({ 
        $and: [
        {"dateTimeFrom" : { 
            $lte:fromDateTime
        }},
        {"dateTimeto" : { 
            $gte :toDateTime
        }}]
    }).exec();
       if(!freecars){
          throw new HttpException('Not found',404);
       }
       else
       return freecars;
    }
   
   

  
}
