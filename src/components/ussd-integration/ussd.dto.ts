import { IsNotEmpty, IsString } from "class-validator"


export class UssdBody {

    @IsNotEmpty()
    @IsString()
    phoneNumber: string;

    
    @IsNotEmpty()
    @IsString()
    text: string;

    @IsNotEmpty()
    @IsString()
    sessionId: string;

    @IsNotEmpty()
    @IsString()
    networkCode: string;

}