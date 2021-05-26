import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../Bookings/Booking';
import { BookingService } from '../Bookings/booking.service';

@Component({
  selector: 'roomdetails',
  templateUrl: './roomdetails.component.html',
  styleUrls: ['./roomdetails.component.css']
})
export class RoomdetailsComponent implements OnInit {
  public room: any = [];
  public id = 0;
  public selectedId: number ;
  
  constructor(public router: Router, private bookingService: BookingService) {}

  private message: String="Room has been deleted successfully!!!";

  ngOnInit(): void {
    this.bookingService.getRooms().subscribe(data => this.room = data);
   
  }
  addroom(){
    
      this.router.navigate(['/addroom']);
    
    
  }
  
  onDelete(room: Booking) {
    this.selectedId = room.room_no;
    this.bookingService.deleteRoom(this.selectedId).subscribe((data) => {
      this.router.navigate(['/home']);
      alert(this.message);
    });
  }
}
