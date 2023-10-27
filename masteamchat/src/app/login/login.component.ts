import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { GlobalVariableService } from '../globalvariable.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  formulario!:FormGroup;

  constructor(
    private service:LoginService,
    private fb:FormBuilder, 
    private router: Router,
    private global:GlobalVariableService
    ){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      email:[''],
      password:['']
    })
  }

  logar(){
    this.service.postLogin({
      email:this.formulario.get('email')?.value,
      password:this.formulario.get('password')?.value
    }).subscribe(data=>{
      if(!data){
        this.formulario.reset()
      }else{
        this.router.navigate(['chats']),
        this.global.setMinhaVariavelGlobal(data)
      }
    })
  }
}
