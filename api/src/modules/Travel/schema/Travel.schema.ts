import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import  mongoose from 'mongoose';
import {User} from '../../../modules/users/schema/users.schema'
@Schema({
    timestamps:true,
})

export class Travel {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })    
    Maker: User
    @Prop({default:'No Title'})
    Title:string
    @Prop()
    StartPosition:[{
        latitude:number,
        longitude:number
    }]
    @Prop()
    ArrivalPosition:[{
        latitude:number,
        longitude:number
    }]
}
export const TravelSchema = SchemaFactory.createForClass(Travel)