import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "./cadastro.model";

@Injectable()
export class CadastroService{

    constructor(private http: HttpClient){}

    postUsuario(Usuario:Usuario):Observable<Usuario> { 
        return this.http.post<Usuario>(`http://localhost:8081/user/cadastrar`, Usuario);
    }
}