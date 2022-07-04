import { NestjsFormDataModule } from 'nestjs-form-data';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { paymentProviders } from './entities/payment.provider';

@Module({
  imports: [DatabaseModule, NestjsFormDataModule,],
  controllers: [PaymentsController],
  providers: [
    ...paymentProviders,
    PaymentsService
  ],
  exports: [...paymentProviders, PaymentsService]
})
export class PaymentsModule {}
