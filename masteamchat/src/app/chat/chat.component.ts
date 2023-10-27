import { Component, OnInit, OnDestroy } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { interval } from 'rxjs';
import { GlobalVariableService } from '../globalvariable.service';
import { ChatService } from './cht.service';
import { Message } from './message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy{
  messages!:Message[];

  chatID!:number;

  formulario!:FormGroup;

  interval!:any;

  constructor(private service: ChatService, private fb:FormBuilder, private route: ActivatedRoute, private global:GlobalVariableService){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      message:['', Validators.required]
    })

    console.log(this.global.getMinhaVariavelGlobal())

    this.route.params.subscribe(params =>{
      this.chatID= params['id'];
      this.service.getMessages(this.chatID).subscribe(data => {
        this.messages = data,
        console.log(data)
      })
    })

    this.route.params.subscribe(params =>{
      this.chatID= params['id'];
      this.refreshData();
      this.interval = setInterval(() => { this.refreshData(); }, 2000);
    })
    
  }

  refreshData() {
    this.service.getMessages(this.chatID).subscribe(data => {
      this.messages = data
    })
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
  

  sendMessage(){
    this.service.postMessages({
      userID:this.global.getMinhaVariavelGlobal().id,
      teamID:this.chatID,
      message: this.formulario.get('message')?.value
    }).subscribe(data=>{
      this.service.getMessages(this.chatID).subscribe(data => {
        this.messages = data,
        this.formulario.reset()
      })
    })
  }
}
