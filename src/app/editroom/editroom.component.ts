import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../Bookings/booking.service';

@Component({
  selector: 'app-editroom',
  templateUrl: './editroom.component.html',
  styleUrls: ['./editroom.component.css']
})
export class EditroomComponent implements OnInit {

  public room_no: any =  this.aroute.snapshot.params['room_no'];

  public selectedRoomId: any;

  public roomData: any = {};

 
  constructor(public restApi:BookingService,
    public aroute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    console.log(this.room_no);
    this.restApi.getRoomById(this.room_no).subscribe((data: {}) => {
      this.roomData = data;
  })

  this.aroute.paramMap.subscribe(params=>{
    this.selectedRoomId=params.get('no');
  });
}

  updateRoom() {
    this.roomData.room_no=this.room_no;
   
    this.restApi.updateRoom(this.roomData).subscribe(data =>
      this.router.navigate(['/roomdetails']))
  }
}
