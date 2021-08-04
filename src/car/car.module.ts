import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import {CarsSchema} from '../schemas/car.schema'
import {RentalSchema} from '../schemas/rental.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Car',
        schema: CarsSchema,
      },
      {
        name: 'Rental',
        schema:RentalSchema,
      },
    ]),
  ],
  controllers: [CarController],
  providers: [CarService],
})
export class CarModule {}
