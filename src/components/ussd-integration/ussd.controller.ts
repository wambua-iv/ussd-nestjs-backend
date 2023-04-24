import { Body, Controller, Post, Req } from "@nestjs/common";
import { UssdService } from "./ussd.service";
import { Request } from "express";

@Controller('ussd')
export class UssdController {
    constructor(private ussdService: UssdService) {}

    @Post()
    getReqBody(@Req() req: Request) {
        console.log(req)
    }
}