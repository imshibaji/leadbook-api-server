import { NestjsFormDataModule } from 'nestjs-form-data';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

import { BusinessModule } from './features/business/business.module';
import { UsersModule } from './features/users/users.module';
import { AuthModule } from './auth/auth.module';
import { LeadsModule } from './features/leads/leads.module';
import { FollowupsModule } from './features/followups/followups.module';
import { DealsModule } from './features/deals/deals.module';
import { PaymentsModule } from './features/payments/payments.module';

@Module({
  imports: [
    DatabaseModule, 
    UsersModule, 
    BusinessModule, 
    AuthModule, 
    NestjsFormDataModule, 
    LeadsModule, 
    FollowupsModule, 
    DealsModule, 
    PaymentsModule
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
