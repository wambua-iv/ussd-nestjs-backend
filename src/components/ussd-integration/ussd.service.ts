import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/Database.service';
import { UssdBody } from './ussd.dto';


@Injectable()
export class UssdService {
  constructor(private database: DatabaseService) {}

 recordIncident(dto: UssdBody) {
    console.log(dto);
   }

   async recordRapeCase(dto: UssdBody) {
   const victim = await this.database.victim.create({
        data : {
            sessionId: dto.sessionId,
            phoneNumber: dto.phoneNumber,
        }
    })

    return `CON Hello ${victim}`
   }
}
