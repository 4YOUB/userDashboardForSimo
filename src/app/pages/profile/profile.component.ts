import { Component,  OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { UserDataService } from 'src/app/shared/user-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user :User = {
    username : '',
    email:'',
    address:{
      street:'',
      suite:'',
      city:''
    }
  }

  constructor(private userService:UserDataService) { 
    this.userService.getUserData().then(data => this.user = new User(data)) 

  }


  async ngOnInit(){

  }


}
