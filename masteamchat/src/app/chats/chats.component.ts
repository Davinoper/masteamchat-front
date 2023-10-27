import { Component, OnInit } from '@angular/core';
import { Chat } from './chat.model';
import { ChatsService } from './chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit{
  chats!:Chat[]

  constructor(private service:ChatsService){}

  ngOnInit(): void {
    this.service.getChats().subscribe(data=> this.chats = data)
  }
}
