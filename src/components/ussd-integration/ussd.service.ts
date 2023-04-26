import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/Database.service';
import { UssdBody } from './ussd.dto';


@Injectable()
export class UssdService {
  constructor(private database: DatabaseService) {}

 recordIncident(dto: any) {
    console.log(dto);
   }

   recordRapeCase(dto: UssdBody) {
    this.database.
   }
}
