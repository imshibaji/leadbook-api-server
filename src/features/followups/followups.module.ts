import { LeadsModule } from './../leads/leads.module';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { DatabaseModule } from './../../database/database.module';
import { Module } from '@nestjs/common';
import { FollowupsService } from './followups.service';
import { FollowupsController } from './followups.controller';
import { followupProviders } from './entities/followup.provider';

@Module({
  imports: [DatabaseModule, NestjsFormDataModule, LeadsModule],
  controllers: [FollowupsController],
  providers: [
    ...followupProviders,
    FollowupsService
  ],
  exports: [...followupProviders, FollowupsService]
})
export class FollowupsModule {}
