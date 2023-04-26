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
    if (dto.text == '1') {
        return ' CON Welcome to Africa is Home \n 1. Would you Like to report an Incident';
    } else if (dto.text == 'FGM') {
      return true; //this.ussdService.recordIncident(dto);
    } else if (dto.text == 'Rape') {
      return true; //this.ussdService.recordIncident(dto);
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
