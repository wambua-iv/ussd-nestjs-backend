import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './components/database/Database.module';
import { UssdModule } from './components/ussd-integration/ussd.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), DatabaseModule, UssdModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
