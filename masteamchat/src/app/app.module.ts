import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpcoesComponent } from './opcoes/opcoes.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatComponent } from './chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from './chat/cht.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatsService } from './chats/chats.service';
import { CadastroService } from './cadastro/cadastro.service';
import { LoginService } from './login/login.service';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { GlobalVariableService } from './globalvariable.service';
import { CriachatComponent } from './criachat/criachat.component';
import { CriaChatService } from './criachat/criachat.service';


@NgModule({
  declarations: [
    AppComponent,
    OpcoesComponent,
    LoginComponent,
    CadastroComponent,
    ChatsComponent,
    ChatComponent,
    CriachatComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  providers: [ChatService, ChatsService, CadastroService,LoginService, GlobalVariableService,CriaChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
