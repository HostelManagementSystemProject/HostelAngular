import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Users/User';
import { UserService } from '../Users/user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;


  
  form = new FormGroup({

    username: new FormControl('', [Validators.required]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
gender:new FormControl('',[Validators.required]),
    zipcode: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [ Validators.required, Validators.minLength(4)]),
    dob:new FormControl('',[Validators.required])
  });

  get f() {
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }


  

 

  constructor(public restApi: UserService,
    public router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser(){
    this.restApi.register(this.user,this.user.address,this.user.room).subscribe((data:{}) => { this.router.navigate(['/login'])})
  }

  /*countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];*/
  countryList: Array<any> = [
    { name: 'Anantapur', cities: ['Select State..', 'Andhra Pradesh'] },
    { name: 'Chittoor', cities: ['Select State..', 'Andhra Pradesh'] },
    { name: 'East Godavari', cities: ['Select State..', 'Andhra Pradesh'] },
    { name: 'Guntur', cities: ['Select State..', 'Andhra Pradesh'] },
    { name: 'Araria', cities: ['Select State..', 'Bihar'] },
    { name: 'Banka', cities: ['Select State..', 'Bihar'] },
    { name: 'Bhagalpur', cities: ['Select State..', 'Bihar'] },
    { name: 'Ambala', cities: ['Select State..', 'Haryana'] },
    { name: 'Hisar', cities: ['Select State..', 'Haryana'] },
    { name: 'Chennai', cities: ['Select State..', 'Tamil Nadu'] },
    { name: 'Krishnagiri', cities: ['Select State..', 'Tamil Nadu'] },
  ];

  cities: Array<any>=[];
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }

  @Input()
  public user={
    user_id:'', user_name:'', phone_number:'', email_id:'', password:'', gender:'', date_of_birth:'',
    address:{addressLine1:'', addressLine2:'', state:this.countryList[0], city:this.cities[0], country:'', zipCode:''}, room: {room_no:''} }
  
    
}
