import { NestjsFormDataModule } from 'nestjs-form-data';
import { DatabaseModule } from 'src/database/database.module';
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { orderProviders } from './entities/order.provider';

@Module({
  imports:[DatabaseModule, NestjsFormDataModule,],
  controllers: [OrdersController],
  providers: [
    ...orderProviders, 
    OrdersService,
  ]
})
export class OrdersModule {}
