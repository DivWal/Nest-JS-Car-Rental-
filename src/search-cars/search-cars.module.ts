import { Module } from '@nestjs/common';
import { SearchCarsController } from './search-cars.controller';
import { SearchCarsService } from './search-cars.service';
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
  controllers: [SearchCarsController],
  providers: [SearchCarsService]
})
export class SearchCarsModule {}

