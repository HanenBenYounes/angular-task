import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  listError :Array<String> = []
  user : user = {}
  inscriptionFrom:any

  constructor(
    private formbuilder:FormBuilder ,
    private userService : UserService,
    private router : Router
  ) {     
    this.inscriptionFrom=this.formbuilder.group({
      name :['',Validators.required],     
      email :['',[Validators.email,Validators.required]],
      password :['',[Validators.required]],    
      repeatpassword :['',[Validators.required]]}    
    )

  }

  ngOnInit(): void {
  }

  get fname(){
    return this.inscriptionFrom.get('name')
  }
  get femail(){
    return this.inscriptionFrom.get('email')
  } 
  get fpassword(){
    return this.inscriptionFrom.get('password')
  }
  get frepeatpassword(){
    return this.inscriptionFrom.get('repeatpassword')
  }

  ajouter(){
      this.user.name = this.inscriptionFrom.value.name
      this.user.email = this.inscriptionFrom.value.email
      this.user.password = this.inscriptionFrom.value.password
      this.userService.ajouterUser(this.user)
      this.router.navigate(['user'])   
  }

}
