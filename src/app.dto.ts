import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Input User Email',
    example: 'imshibaji@gmail.com',
  })
  email: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Input User Passowrd',
    example: 'password',
  })
  password: string;
}

export class ForgetDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Input User Email',
    example: 'example@abc.com',
  })
  email: string;
}

export class NewPasswordDto {
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Use Reset Token',
    example: 'Reset Token',
  })
  token: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Set New Password',
    example: 'new password',
  })
  email: string;
}
