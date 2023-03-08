import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelSchema } from './schema/Travel.schema';
import { TravelController } from './travel.controller';
import { TravelService } from './travel.service'; 
@Module({
  imports:[
    MongooseModule.forFeature([{ name:'Travel', schema: TravelSchema }]),
],
  controllers: [TravelController],
  providers: [TravelService]
})
export class TravelModule {}
