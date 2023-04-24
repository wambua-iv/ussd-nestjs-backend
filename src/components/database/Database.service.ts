import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaClient } from "@prisma/client";


@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    constructor(private configService: ConfigService) {
        super({
            datasources: {
               db: {
                url: `${configService.get<string>('NODE_ENV') === 'test'
                ? configService.get<string>('DB_TEST_CONNECTION')
                : configService.get<string>('DB_CONNECTION_URI')}`
               }
            }
        })
    }
    async onModuleInit() {
        await this.$connect()
    }
}