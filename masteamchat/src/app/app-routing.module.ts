import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChatComponent } from './chat/chat.component';
import { ChatsComponent } from './chats/chats.component';
import { CriachatComponent } from './criachat/criachat.component';
import { LoginComponent } from './login/login.component';
import { OpcoesComponent } from './opcoes/opcoes.component';

const routes: Routes = [
  {path:"", component:OpcoesComponent},
  {path:"login", component:LoginComponent},
  {path:"cadastro", component:CadastroComponent},
  {path:"chats", component:ChatsComponent},
  {path:"chat/:id", component:ChatComponent},
  {path:"criar", component:CriachatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
