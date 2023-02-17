import { LoginDto } from './../app.dto';
import { UsersService } from './../features/users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    try {
      const user = await this.usersService.findByEmail(email);
      if (user != null && bcrypt.compareSync(pass, user.password)) {
        const { password, businesses, ...result } = user;
        return result;
      }
      return null;
    } catch (error) {
      // console.log(error);
      return null;
    }
  }

  async login(loginDto: LoginDto) {
    try {
      const usr = await this.validateUser(loginDto.email, loginDto.password);
      const payload = { userid: usr.id, email: usr.email, pass: usr.password };
      // console.log(payload);

      return {
        access_token: this.jwtService.sign(payload),
        user: usr,
      };
    } catch (error) {
      return {
        message: 'User Not Found',
      };
    }
  }
}
