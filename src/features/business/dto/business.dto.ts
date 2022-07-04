import { User } from './../../users/entities/user.entity';
import { UserDto } from './../../users/dto/user.dto';
import { Transform } from "class-transformer";
import { IsNotEmpty, IsPhoneNumber } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BusinessDto {

    @ApiProperty({
        type: Number,
        required: false,
        description: 'Business ID'
    })
    id?: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Business UUID'
    })
    uid?:string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Business Name'
    })
    name: string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Business Address'
    })
    address?: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Business City'
    })
    city?: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Business State'
    })
    state?: string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Business Country'
    })
    country: string;

    @IsNotEmpty()
    @ApiProperty({
        type: Number,
        required: true,
        description: 'Area Pincode'
    })
    pincode: number;

    @IsPhoneNumber()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Business Phone Number'
    })
    mobile:string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Input Business Alternate Phone Number'
    })
    altMobile?:string;

    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'Input Business Email'
    })
    email:string;

    @ApiProperty({
        type: String,
        required: false,
        description: 'Input Business Website'
    })
    website: string;


    @Transform(({value})=>{
        return (value === true || (typeof value == 'string' && value.toLowerCase() === 'true'));
    })
    @ApiProperty({
        type: String,
        required: true,
        description: 'Input Business Active Status'
    })
    isActive:boolean;
    
}
