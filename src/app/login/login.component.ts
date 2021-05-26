import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';
import { User } from '../Users/User';
import { UserService } from '../Users/user.service';
import { userDetails } from '../Users/userDetails';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(4)])
  });
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
  }
  
  Role = Role;

  public selectedEmail: any;
  public selectedPass: any;
  


  public user = {email_id:'', password:''};

  public udata: any=[];

  public message: String;


  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  loginUser(role : Role) {
    //console.log(this.user.email_id);
    //console.log(this.user.password);
   this.selectedEmail = this.user.email_id;
  this.selectedPass = this.user.password;
    this.userService.validate(this.selectedEmail, this.selectedPass).subscribe(data => this.udata = data)
    
      
      //console.log(this.udata.email_id);
      //console.log(this.udata.password);
    if(this.user.email_id == this.udata.email_id && this.user.password == this.udata.password){
      this.authService.login(role);
      this.router.navigate(['/']);

      this.userService.userIdFromLogin = this.udata.user_id;
      this.userService.userNameFromLogin = this.udata.user_name;
      this.userService.userEmailFromLogin = this.udata.email_id;
      this.userService.userPassFromLogin = this.udata.password;
      this.userService.userCityFromLogin = this.udata.address.city;
      this.userService.userStateFromLogin = this.udata.address.state;
      this.userService.userCountryFromLogin = this.udata.address.country;
      this.userService.userRoomFromLogin = this.udata.room.room_no;
      this.userService.userPhnFromLogin = this.udata.phone_number;

      console.log(this.udata.user_name);
    }
    else{
      this.message="User is not registered";
    }
    
  }

  login(role: Role) {
    this.authService.login(role);
    this.router.navigate(['/']);
  }  

  logout() {
    this.authService.logout();
  }
}