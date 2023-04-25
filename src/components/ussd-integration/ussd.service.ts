import { Injectable } from "@nestjs/common";
import { DatabaseService } from "../database/Database.service";

@Injectable()
export class UssdService {
    constructor(private database : DatabaseService) {}
    
    recordIncident() {
        return 'CON Are you reporting for self'
    }
}