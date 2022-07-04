import { UsersService } from './features/users/users.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello Shibaji!';
  }
}
