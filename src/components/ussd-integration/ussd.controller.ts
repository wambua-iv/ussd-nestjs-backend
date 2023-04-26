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
        return 'CON Who are reporting for?/ Unaripoti kwa niaba ya nani? \n 1. Self/ Wewe mwenyewe \n 2. Someone else/ Mtu mwengine'
    } else if (dto.text == '1') {
        return ' CON Sasa, unaitwa nani?/ Hi, what\'s your name';
    } 
    else if (dto.text.includes('1*')){
        return ' CON Sasa, unaitwa nani?/ Hi, what\'s your name \n format: Name: Your Name \n jibu Jina: Jina Lako';
    }
    else if (dto.text.slice(2).includes('Name')){
        return 'CON we are getting there'
    }
    else if (dto.text == '2') {
      return this.ussdService.recordRapeCase(dto);
    } else if (dto.text == '2*'+ '[a-zA-Z]+') {
      return 'CON we are good';
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
