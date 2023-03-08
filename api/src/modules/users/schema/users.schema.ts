import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema({
    timestamps:true,
})
export class User {
    @Prop({unique: [true,'Duplicated UserName']})
    UserName:String
    @Prop({unique: [true,'Duplicated email']})
    Email:String
    @Prop()
    Password:String
    @Prop({default:false})
    Deleted:boolean
}
export const UserSchema = SchemaFactory.createForClass(User)