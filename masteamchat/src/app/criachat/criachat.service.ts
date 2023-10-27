import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Chat } from "../chats/chat.model";

@Injectable()
export class CriaChatService{

    constructor(private http: HttpClient){}

    postChat(name:string):Observable<Chat> { 
        return this.http.post<Chat>(`http://localhost:8081/team/cadastrar`, {name:name});
    }
}