import { Module, forwardRef } from "@nestjs/common";
import { DatabaseModule } from "../database/Database.module";
import  UssdController from "./ussd.controller";
import {UssdService}  from "./ussd.service";
import UssdMenu from "ussd-builder";

 @Module({
    imports: [DatabaseModule],
    controllers: [UssdController],
    providers: [UssdService],
 })
 export class UssdModule {}
