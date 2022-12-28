import { UsersService } from './features/users/users.service';
import { UserDto } from './features/users/dto/user.dto';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LoginDto, ForgetDto, NewPasswordDto } from './app.dto';
import { AuthService } from './auth/auth.service';
import { FormDataRequest } from 'nestjs-form-data';

@Controller()
@ApiTags('Authorization')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private userServide: UsersService,
  ) {}

  // @UseGuards(AuthGuard('local'))
  @Post('/login')
  @FormDataRequest()
  @ApiResponse({ description: 'Input Email and Password for Login Token' })
  @ApiBody({ type: LoginDto })
  login(@Body() logValInput: LoginDto) {
    // return this.appService.validateUser(logValInput.email, logValInput.password);
    return this.authService.login(logValInput);
  }

  // @UseGuards(LocalAuthGuard)
  @Get('auth/login')
  @ApiResponse({ description: 'Input Email and Password for Login Token' })
  @ApiQuery({ type: LoginDto })
  async apiLogin(@Req() req) {
    return this.authService.login(req.query);
  }

  @Post('/register')
  @FormDataRequest()
  @ApiResponse({ description: 'Input User Details' })
  @ApiBody({ type: UserDto })
  register(@Body() user: UserDto) {
    // return this.appService.validateUser(logValInput.email, logValInput.password);
    return this.userServide.create(user);
  }

  @Post('/forget')
  @FormDataRequest()
  @ApiResponse({ description: 'Input User Email' })
  @ApiBody({ type: ForgetDto })
  async forget(@Body() forget: ForgetDto) {
    if ((await this.userServide.findByEmail(forget.email))?.id) {
      return { message: 'We send reset token please check Your Email' };
    }
    return { message: 'Your email not exist in our database' };
  }

  @Post('/set_new_password')
  @FormDataRequest()
  @ApiResponse({ description: 'Set New Password' })
  @ApiBody({ type: NewPasswordDto })
  async setNewPassword(@Body() newPassword: NewPasswordDto) {
    if (newPassword.token) {
      return {
        message:
          'Your new password setup successfully. You can login with new password',
      };
    }
    return { message: 'Your token does not matched with our database' };
  }
}
