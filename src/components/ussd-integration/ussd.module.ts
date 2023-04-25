import { Module } from '@nestjs/common';
import { UssdController } from './ussd.controller';
import { UssdService } from './ussd.service';
import { DatabaseModule } from '../database/Database.module';

@Module({
  controllers: [UssdController],
  providers: [UssdService],
})
export class UssdModule {}
