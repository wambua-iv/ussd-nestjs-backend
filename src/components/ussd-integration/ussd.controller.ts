import { Controller, Get, Post, Req } from "@nestjs/common";
import { UssdService } from "./ussd.service";
import { Request } from "express";

@Controller('ussd')
export class UssdController {
    constructor(private ussdService: UssdService) {}

    @Post('post')
    getReqBody(@Req() req: Request) {
        console.log(req)
    }
    @Get('resp')
    respond(@Req() req: Request) {
        console.log(req)
    }
}