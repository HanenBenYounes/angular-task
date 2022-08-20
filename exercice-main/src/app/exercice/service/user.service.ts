import { Injectable } from '@angular/core';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 listUser : Array<user> = []

constructor() { }

findAllUser(){
  return this.listUser
}

ajouterUser(user : user){
  this.listUser.push(user)
}

}
