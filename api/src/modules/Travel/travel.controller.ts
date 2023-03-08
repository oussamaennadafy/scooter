import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TravelDto } from 'src/shared/dto/Travel.dto';
import { TravelService } from './travel.service';

@Controller('travel')
export class TravelController {
    constructor(private TravelService : TravelService){}
    @Post('NewTravel')
    @UsePipes(new ValidationPipe())
    AddNewTravel(@Body() travel:TravelDto){
        return this.TravelService.AddNewTravel(travel)
    }

    @Get(':id')
    GetUserTravels(@Param('id') id: string){
        return this.TravelService.GetTravelsByIdMaker(id)
    }
}
