import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";
import { CreateUser } from "../models/login.model";
import { MessageResponse } from "../models/response-message.model";

@Injectable()
export class UserService extends HttpService {

    createUser(data: CreateUser): Observable<MessageResponse> {
        return this.post('usuarios', data);
    }

}
