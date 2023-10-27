import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Login } from "./login.model";
import { Usuario } from "../cadastro/cadastro.model";

@Injectable()
export class LoginService{

    constructor(private http: HttpClient){}

    postLogin(login:Login):Observable<Usuario> { 
        return this.http.post<Usuario>(`http://localhost:8081/user/login`, login);
    }
}