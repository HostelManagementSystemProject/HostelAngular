import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../Bookings/booking.service';

@Component({
  selector: 'hostelregistration',
  templateUrl: './hostelregistration.component.html',
  styleUrls: ['./hostelregistration.component.css']
})
export class HostelregistrationComponent implements OnInit {

  @Input()
  public room= {room_no:'', room_type:''};

  public allRooms:any={}

  constructor(public restApi: BookingService,
    public router: Router,public bookService: BookingService) { }

    ngOnInit(): void {
      this.bookService.getRooms().subscribe(data => this.allRooms = data)
    }

  bookRoom(){
    this.restApi.roomBook(this.room).subscribe((data:{}) => { this.router.navigate(['/checkindetails'])})
    this.bookService.roomFromBooking =this.room.room_no;
    console.log(this.bookService.roomFromBooking );
    
  }

}
