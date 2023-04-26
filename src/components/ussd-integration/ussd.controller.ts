import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UssdService } from './ussd.service';
import { Request } from 'express';
import { UssdBody } from './ussd.dto';

@Controller('ussd')
export class UssdController {
  constructor(private ussdService: UssdService) {}

  @Post('post')
  getReqBody(@Body() dto: UssdBody) {
    console.log(dto);
    if (dto.text == '1') {
      return this.ussdService.recordIncident();
    } else if (dto.text == '1*1') {
      return 'CON its is good to be home';
    } else {
      return ' CON Welcome to Africa is Home \n 1. Would you Like to report an Incident';
    }
  }
  @Get('resp')
  respond(@Req() req: Request) {
    console.log(req);
  }
}
