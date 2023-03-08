import { IsEmail, IsNotEmpty ,IsStrongPassword} from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    UserName:String
    @IsEmail()
    Email:String
    @IsStrongPassword()
    Password:String
}