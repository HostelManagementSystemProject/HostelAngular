import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../Users/user.service';

@Component({
  selector: 'editresident',
  templateUrl: './editresident.component.html',
  styleUrls: ['./editresident.component.css']
})
export class EditresidentComponent implements OnInit {

  public user_id: any = this.aroute.snapshot.params['user_id'];

  public selectedUserId: any;
  public userData: any = {};

  constructor(public restApi: UserService,
    public aroute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.restApi.getUser(this.user_id).subscribe((data: {}) => {
      this.userData = data;
    })

      this.aroute.paramMap.subscribe(params => {
        this.selectedUserId = params.get('id');
  
      });
  }

  updateUser() {
    this.restApi.updateUser(this.userData).subscribe(data =>
      this.router.navigate(['/residentdetails']))
  }

  onClick(user: any) {
    this.router.navigate(['/editresident', user.user_id]);
  }

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

}
