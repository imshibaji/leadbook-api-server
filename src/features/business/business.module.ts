import { UsersModule } from './../users/users.module';
import { DatabaseModule } from 'src/database/database.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessResolver } from './business.resolver';
import { businessProviders} from './entities/business.provider';
import { BusinessController } from './business.controller';

@Module({
  imports: [DatabaseModule, NestjsFormDataModule, UsersModule],
  providers: [...businessProviders, BusinessResolver, BusinessService],
  controllers: [BusinessController],
  exports: [...businessProviders, BusinessService]
})
export class BusinessModule {}
