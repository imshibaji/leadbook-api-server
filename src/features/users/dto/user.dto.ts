import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty } from "class-validator";
import * as bcrypt from 'bcrypt';
import { Role } from "../entities/role.enum";


export class UserDto {
    @ApiProperty({
        type: Number,
        required: false,
        description: 'User ID',
        example: null
    })
    id?: number;

    @ApiProperty({
        type: String,
        required: false,
        description: 'User UUID',
        example: null
    })
    uid?:string;
    
    @IsNotEmpty()
    @ApiProperty({
        type: String,
        required: true,
        description: 'User Full Name',
        example: 'Shibaji Debnath'
    })
    name:string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty({
        type: String,
        required: true,
        description: 'User Email',
        example: 'imshibaji@gmail.com'
    })
    email:string;

    @IsNotEmpty()
    @Transform(({value})=>{
        const saltOrRounds = 10;
        const salt = bcrypt.genSaltSync(saltOrRounds);
        const hash = bcrypt.hashSync(value, salt);
        return hash;
    })
    @ApiProperty({
        type: String,
        required: true,
        description: 'User Password',
        example: 'password'
    })
    password:string;

    @IsEnum(Role)
    @ApiProperty({
        type: Role,
        enum: Role,
        default:Role.User,
        required: true,
        description: 'User Role',
        example: Role.User
    })
    role:Role;

    @IsBoolean()
    @Transform(({value})=>{
        return (value === true || (typeof value == 'string' && value.toLowerCase() === 'true'));
    })
    @ApiProperty({
        type: Boolean,
        required: true,
        default: false,
        description: 'User Active Status',
        example: false
    })
    isActive:boolean;
}
