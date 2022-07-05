import { BusinessModule } from './../business/business.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { leadProviders } from './entities/lead.provider';

@Module({
  imports: [DatabaseModule, NestjsFormDataModule, BusinessModule],
  controllers: [LeadsController],
  providers: [
    ...leadProviders,
    LeadsService
  ],
  exports: [...leadProviders, LeadsService]
})
export class LeadsModule {}
