import { IsNotEmpty,IsStrongPassword } from "class-validator";

export class SignUserDto{
    @IsNotEmpty()
    UserName:String
    @IsStrongPassword()
    Password:String
}