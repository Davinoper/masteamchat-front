import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Message } from "./message.model";
import { MessageSend } from "./chat.messagesend.model";

@Injectable()
export class ChatService{

    constructor(private http: HttpClient){}

    getMessages(id:number):Observable<Message[]> { 
        return this.http.get<Message[]>(`http://localhost:8081/message/${id}`);
    }


    postMessages(message:MessageSend):Observable<Message> { 
        return this.http.post<Message>(`http://localhost:8081/message/`, message);
    }
}