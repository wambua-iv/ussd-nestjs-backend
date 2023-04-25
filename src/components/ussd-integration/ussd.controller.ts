import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { UssdService } from "./ussd.service";
import { Request } from "express";
import { UssdBody } from "./ussd.dto";

@Controller('ussd')
export class UssdController {
    constructor(private ussdService: UssdService) {}

    @Post('post')
    getReqBody(@Body() dto: UssdBody) {
        console.log(dto)
        return 'CON Hello Africa is HOME'
    }
    @Get('resp')
    respond(@Req() req: Request) {
        console.log(req)
    }
}