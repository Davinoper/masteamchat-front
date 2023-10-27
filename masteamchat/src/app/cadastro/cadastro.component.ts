import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route } from '@angular/router';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit{
  formulario!: FormGroup;

  constructor(private service: CadastroService, private fb:FormBuilder){}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      name:[''],
      email:[''],
      password:['']
    })
  }

  cadastrar(){
    this.service.postUsuario({
      name:this.formulario.get('name')?.value,
      email:this.formulario.get('email')?.value,
      password:this.formulario.get('password')?.value
    }).subscribe(data=>{
      console.log(data);
      this.formulario.reset();
    })
  }
  
}
