import { Injectable, HttpException } from '@nestjs/common';
// import {CARS} from './car.mock';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from '../interfaces/car.interface';
import { IRental } from '../interfaces/rental.interface';
import { CarDto } from '../dtos/car.dto'
import * as mongoose from 'mongoose';
import { defaultMaxListeners } from 'events';
// const User = require('mongoose').model('User');
// const Car = require('mongoose').model('Car');
const ObjectId = mongoose.Schema.Types.ObjectId

@Injectable()
export class CarService {

   constructor(@InjectModel('Car') private readonly carModel: Model<ICar>,@InjectModel('Rental') private readonly rentalModel: Model<IRental>) { }

   public getCars() {
      return this.carModel.find().exec();
   }

   public async postCars(car) {
      const cars = await new this.carModel(car);
      return cars.save();
   }


   public async deleteCars(carLicenseNumber: string): Promise<any> {
      const car = await this.carModel.deleteOne({ carLicenseNumber }).exec();
      if (car.deletedCount === 0) {
         throw new HttpException('Not found', 404);
      }
      return car;
   }

   public async getCarbyId(carLicenseNumber: string): Promise<any> {
      const cars = this.carModel.find({ "carLicenseNumber":carLicenseNumber }).exec();
      if (!cars) {
         throw new HttpException('Not found', 404);
      }
      else
         return cars;
   }

   public async updateCarById(carLicenseNumber: string, property_name: string, property_value: string): Promise<any> {

      const propertyName = String(property_name);
      const propertyValue = String(property_value);
      const car = await this.carModel.findOneAndUpdate({ carLicenseNumber }, { [propertyName]: propertyValue, }).exec();
      if (!car) {
         throw new HttpException('Not Found', 404);
      }
      return car;

   }
   public async getAllCssarsBookedbyUser(id: number): Promise<any> {

      const userId = Number(id);


      const car = await this.rentalModel.find().exec();


      if (!car) {
         throw new HttpException('Not Found', 404);
      }
      return car;

      // this.rentalModel.find().then(userDetail => {
      //   let detail=JSON.parse(JSON.stringify(userDetail));
      //  detail.find({user.id:id}).then()
      // })
      // .catch()
      // {
      //    throw new HttpException('Not Found', 404);
      // }

      return ;
   }
   public async getAllCarsBookedbyUser(id: string): Promise<any> {

      const user = await this.rentalModel.find().exec();
      if (!user) {
          throw new HttpException('Not Found', 404);
      }
      let res= JSON.parse(JSON.stringify(user));
      return res.carsRented;

  }
}
