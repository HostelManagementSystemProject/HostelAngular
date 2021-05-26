import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roombook',
  templateUrl: './roombook.component.html',
  styleUrls: ['./roombook.component.css']
})
export class RoombookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  countryList: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona'] },
    { name: 'USA', cities: ['Downers Grove'] },
    { name: 'Mexico', cities: ['Puebla'] },
    { name: 'China', cities: ['Beijing'] },
  ];
  cities: Array<any>;
  changeCountry(count) {
    this.cities = this.countryList.find(con => con.name == count).cities;
  }

}
