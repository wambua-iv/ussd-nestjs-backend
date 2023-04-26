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
        return ' CON Sasa, unaitwa nani?/ Hi, what\'s your name \n Name: Your Name \n Jina: Jina Lako';
    } 
    else if (dto.text.includes('*3*')) {
        return `END Pole! Utapokea Simu yetu sasa hivi `
      }
    else if (dto.text.includes('*3')) {
        return `CON ${dto.text.slice(2, -2)} Tupige Simu wapi `
      }
    else if (dto.text.includes('1*')){

        return `CON Jambo ${dto.text.slice(2)} Gani Limetendeka 
             3. Sexual Assault/ Ubakaji 
             4. FGM/ Ukeketaji wa sehemu zangu za sir`
    }
     else if (dto.text == '2*'+ '[a-zA-Z]+') {
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
