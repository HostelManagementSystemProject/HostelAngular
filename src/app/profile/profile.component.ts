import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Users/User';
import { UserService } from '../Users/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {



  @Input()
  public user:any=[];

  public udata: any={email:this.userService.userEmailFromLogin};

  public email_id= this.userService.userEmailFromLogin;
  public user_id= this.userService.userIdFromLogin;

  public name= this.userService.userNameFromLogin;
  public pass= this.userService.userPassFromLogin;
  public city= this.userService.userCityFromLogin;
  public state= this.userService.userStateFromLogin;
  public country= this.userService.userCountryFromLogin;
  public room= this.userService.userRoomFromLogin;
  public phone = this.userService.userPhnFromLogin;

  constructor(public router: Router,
    private userService: UserService) { }


    ngOnInit(): void {
      this.userService.searchUser(this.userService.userIdFromLogin).subscribe(data => this.user = data);
      console.log(this.userService.userIdFromLogin);
      console.log(this.userService.userEmailFromLogin);
      console
               
    }


}
