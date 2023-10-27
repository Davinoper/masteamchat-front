import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CriaChatService } from './criachat.service';

@Component({
  selector: 'app-criachat',
  templateUrl: './criachat.component.html',
  styleUrls: ['./criachat.component.scss']
})
export class CriachatComponent implements OnInit {
  formulario!:FormGroup;

  constructor(private service:CriaChatService, private fb:FormBuilder, private router:Router){}


  ngOnInit(): void {
    this.formulario = this.fb.group({
      name:['']
    })
  }

  criaChat(){
    this.service.postChat(this.formulario.get('name')?.value).subscribe(data=>{
      this.router.navigate(['chats']);
    })
  }
}
