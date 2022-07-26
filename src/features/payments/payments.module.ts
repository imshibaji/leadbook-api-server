import { BusinessModule } from './../business/business.module';
import { DealsModule } from './../deals/deals.module';
import { LeadsModule } from './../leads/leads.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { paymentProviders } from './entities/payment.provider';

@Module({
  imports: [
    DatabaseModule,
    NestjsFormDataModule,
    LeadsModule,
    DealsModule,
    BusinessModule
  ],
  controllers: [PaymentsController],
  providers: [
    ...paymentProviders,
    PaymentsService
  ],
  exports: [...paymentProviders, PaymentsService]
})
export class PaymentsModule {}
