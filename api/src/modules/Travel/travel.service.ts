import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/schema/users.schema';
import { Model } from 'mongoose';
import { TravelDto } from 'src/shared/dto/Travel.dto';
import { HttpException, NotFoundException } from '@nestjs/common/exceptions';
import { Travel } from './schema/Travel.schema';


@Injectable()
export class TravelService {
    constructor(
        @InjectModel(Travel.name)
        private TravelModel:Model<Travel>
    ){}
    async AddNewTravel(Travel:TravelDto):Promise<{message:string}>{
        const newTravel = await this.TravelModel.create(Travel)
        if (!newTravel) {
            throw new  HttpException('error',HttpStatus.BAD_REQUEST)     
        }
        return {message:'Succesfully Saved'}
    }
    async GetTravelsByIdMaker(id:string):Promise<{travels:{}}>{
        const travels = await this.TravelModel.find({
            Maker:id
        })
        if (!travels) {
            throw new  HttpException('No Travels found',HttpStatus.BAD_REQUEST)     
        }
        return {travels}
    }
}
