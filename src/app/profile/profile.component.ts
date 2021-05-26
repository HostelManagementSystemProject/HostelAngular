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
  public user:any={};

  public udata: any={email:this.userService.userEmailFromLogin};



  constructor(public router: Router,
    private userService: UserService) { }


    ngOnInit(): void {
      this.userService.validate(this.userService.userEmailFromLogin,this.userService.userPassFromLogin).subscribe(data => this.user = data);
      console.log(this.userService.userPassFromLogin);
      console.log(this.userService.userEmailFromLogin);
               
    }


}
