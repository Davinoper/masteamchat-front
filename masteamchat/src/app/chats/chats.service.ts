import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Chat } from "./chat.model";

@Injectable()
export class ChatsService{

    constructor(private http: HttpClient){}

    getChats():Observable<Chat[]> { 
        return this.http.get<Chat[]>(`http://localhost:8081/team`);
    }
}