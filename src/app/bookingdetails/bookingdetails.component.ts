import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../Bookings/Booking';
import { BookingService } from '../Bookings/booking.service';

@Component({
  selector: 'bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {

  public selectedId: number ;

  private message: String="Booking has been deleted successfully!!!";

  constructor(public router: Router,
    public bookingService: BookingService) { }

  @Input()
  public booking:any={};

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(data => this.booking = data)
    console.log(this.booking.user.user_name)
  }

  onDelete(book: Booking) {
    this.selectedId = book.booking_id;
    this.bookingService.deleteBooking(this.selectedId).subscribe((data) => {
      this.router.navigate(['/home']);
      alert(this.message);
    });
  }

}
