import { NestjsFormDataModule } from 'nestjs-form-data';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { dealProviders } from './entities/deal.provider';

@Module({
  imports: [DatabaseModule, NestjsFormDataModule,],
  controllers: [DealsController],
  providers: [
    ...dealProviders,
    DealsService
  ],
  exports: [...dealProviders, DealsService]
})
export class DealsModule {}
