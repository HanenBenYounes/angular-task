import { Component, OnInit } from '@angular/core';
import { user } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listUSer : Array<user> = []
  user : user = {}

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
    this.findAllUser()
  }

  findAllUser(){
    this.listUSer = this.userService.findAllUser()
  }

}
