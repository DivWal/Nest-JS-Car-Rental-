import { Module } from '@nestjs/common';
import { CalculatePriceController } from './calculate-price.controller';
import { CalculatePriceService } from './calculate-price.service';
import {MongooseModule} from '@nestjs/mongoose';
import {CarsSchema} from '../schemas/car.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Car',
        schema: CarsSchema,
      },
    ]),
  ],

  controllers: [CalculatePriceController],
  providers: [CalculatePriceService]
})
export class CalculatePriceModule {

  
}
