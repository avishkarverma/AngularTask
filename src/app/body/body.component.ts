import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../services/getUsers.service'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  users:any;
  constructor(private getUsersService : GetUsersService) { }

  ngOnInit() {
   
  }
  getUsers(username) {
    if(username.length > 2){
     this.getUsersService.getUserbyName(username).subscribe(
       data => {
        this.users = data;
       }
     );
    }
  }
  openPopup() {
    $('body').modal('show');


  }

}
