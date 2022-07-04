import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Input User Email',
        example: 'imshibaji@gmail.com'
    })
    email: string; 

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Input User Passowrd',
        example: 'password'
    })
    password: string;
}