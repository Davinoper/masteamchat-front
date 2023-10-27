import { Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ChatComponent } from "./chat/chat.component";
import { ChatsComponent } from "./chats/chats.component";
import { LoginComponent } from "./login/login.component";
import { OpcoesComponent } from "./opcoes/opcoes.component";

export const ROUTES: Routes = [
    {path:"", component:OpcoesComponent},
    {path:"login", component:LoginComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"chats", component:ChatsComponent},
    {path:"chat/:id", component:ChatComponent},
  ];