import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/Database.service';
import UssdMenu from 'ussd-builder';
import { UssdBody } from './ussd.dto';

@Injectable()
export class UssdService {
  constructor(
    private database: DatabaseService,
    private ussdHandler: UssdMenu,
  ) {}

  recordIncident(dto: UssdBody) {
    this.ussdHandler.startState({
      run: () => {
        this.ussdHandler.con('What case are you reporting \n 1.FGM \n 2. Rape');
      },
      next: {
        '1': 'FGM',
        '2': 'Rape'
    }
    });

    this.ussdHandler.state('FGM', {
        run: () => {}
    })
  }
}
