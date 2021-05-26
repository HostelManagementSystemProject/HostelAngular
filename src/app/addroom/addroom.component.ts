import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Bookings/booking.service';

@Component({
  selector: 'addroom',
  templateUrl: './addroom.component.html',
  styleUrls: ['./addroom.component.css']
})
export class AddroomComponent implements OnInit {

  @Input()
  public roomDetails = {room_no:'',room_type: '', vacancy: '' };

  private message: String="Room has been added successfully!!!";

  constructor(public router: Router, public restApi: BookingService) { }

  ngOnInit(): void {
  }

  addRoom(){
    this.restApi.createRoom(this.roomDetails).subscribe((data:{})=>{
      this.router.navigate(['/roomdetails'])
      alert(this.message);
    }
    )
  }

}
