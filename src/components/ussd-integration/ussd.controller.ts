import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UssdService } from './ussd.service';
import { Request } from 'express';
import { UssdBody } from './ussd.dto';

@Controller('ussd')
class UssdController {
  constructor(private ussdService: UssdService) {}

  @Post('post')
  getReqBody(@Body() dto: UssdBody) {
    console.log(dto);
    if (dto.text == '') {
        return ' CON Would you Like to report an Incident \n 1.FGM \n 2.Rape';
    } else if (dto.text == 'FGM' || '1' || 'fgm' || 'Fgm') {
      return 'CON FGM landing'
    } else if (dto.text == 'Rape' || '2' || 'rape') {
      return 'CON Rape landing'
    } else {
      return ' END Invalid input';
    }
  }
  @Get('resp')
  respond(@Req() req: Request) {
    console.log(req);
  }
}
export default UssdController;
