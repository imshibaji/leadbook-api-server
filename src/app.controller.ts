import { UsersService } from './features/users/users.service';
import { UserDto } from './features/users/dto/user.dto';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { LoginDto } from './app.dto';
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
  @ApiResponse({description: 'Input Email and Password for Login Token'})
  @ApiBody({type: LoginDto })
  login(@Body() logValInput: LoginDto) {
    // return this.appService.validateUser(logValInput.email, logValInput.password);
    return this.authService.login(logValInput);
  }

  // @UseGuards(LocalAuthGuard)
  @Get('auth/login')
  @ApiResponse({description: 'Input Email and Password for Login Token'})
  @ApiQuery({type:LoginDto})
  async apiLogin(@Req() req) {
    return this.authService.login(req.query);
  }


  @Post('/register')
  @FormDataRequest()
  @ApiResponse({description: 'Input User Details'})
  @ApiBody({type: UserDto })
  register(@Body() user: UserDto) {
    // return this.appService.validateUser(logValInput.email, logValInput.password);
    return this.userServide.create(user);
  }
}



