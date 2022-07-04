import { BusinessModule } from './../business/business.module';
import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { userProviders } from './entities/user.provider';
import { DatabaseModule } from 'src/database/database.module';
import { NestjsFormDataModule } from 'nestjs-form-data';

@Module({
  controllers: [UsersController],
  imports: [
    DatabaseModule, 
    NestjsFormDataModule, 
    forwardRef(() => BusinessModule),
  ],
  providers: [
    ...userProviders,
    UsersService
  ],
  exports:[...userProviders,UsersService]
})
export class UsersModule {}
