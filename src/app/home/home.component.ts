import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public buttonDisable : boolean = false;
  serverdate : Date;
  mm=2;
  dd=18;

 

  ngOnInit() {

    if(this.mm==1 && this.dd==18)
    {
      this.buttonDisable = true;
      console.log('Achieve you want');
    }
  }

}