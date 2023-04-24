import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './Database.service';

@Global()
@Module({
    imports: [ConfigModule],
    providers: [DatabaseService],
    exports: [DatabaseService]
})
export class DatabaseModule {}