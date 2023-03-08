import {IsNotEmpty ,IsObject,IsString} from "class-validator"

export class TravelDto{
    @IsNotEmpty()
    @IsString()
    Maker:string
    @IsString()
    Title:string
    @IsNotEmpty()
    StartPosition:{
        latitude:number,
        longitude:number
    }
    @IsNotEmpty()
    ArrivalPosition:{
        latitude:number,
        longitude:number
    }

} 