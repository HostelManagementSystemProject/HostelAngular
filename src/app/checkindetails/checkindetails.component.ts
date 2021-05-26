import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../Bookings/booking.service';
import { UserService } from '../Users/user.service';

@Component({
  selector: 'checkindetails',
  templateUrl: './checkindetails.component.html',
  styleUrls: ['./checkindetails.component.css']
})
export class CheckindetailsComponent implements OnInit {
  addForm: FormGroup;
  submitted = false;
  public da1: number;
  public mn1: number;
  public da2: number;
  public mn2: number;
  public da3: number;
  public mn3: number;
  public gt1:number;
  public gt2:number;

  public msg: string;
  public msg1: string;
  public msg2: string;
  public msg3: string;

  clicked: boolean;

 

  constructor(public restApi: BookingService,
    private formBuilder: FormBuilder,
    public datePipe: DatePipe,
    public router: Router,public bookingService :BookingService, public userService: UserService
    ) { }
  
  private message: String="Room booking has been done successfully!!! Please pay the fees";
    @Input()
    public book= {booking_date:'', check_in:'', check_out:'',user:{user_name:this.userService.userNameFromLogin}};

  ngOnInit(): void {
  }

  booking() {
    console.log(this.book.booking_date);
    this.book.booking_date = this.datePipe.transform(
      this.book.booking_date,
      'yyyy-MM-dd'
    );
   
    this.book.check_in = this.datePipe.transform(
      this.book.check_in,
      'yyyy-MM-dd'
    );
    this.book.check_out = this.datePipe.transform(
      this.book.check_out,
      'yyyy-MM-dd'
    );
   this.da3=new Date(this.book.booking_date).getDate();
 
    /*this.da3 = new Date(this.book.booking_date).getDate();*/
    this.mn3 = new Date(this.book.booking_date).getMonth();
    this.da1 = new Date(this.book.check_in).getDate();
    this.mn1 = new Date(this.book.check_in).getMonth();
    this.da2 = new Date(this.book.check_out).getDate();
    this.mn2 = new Date(this.book.check_out).getMonth();
    this.gt1=new Date(this.book.check_in).getTime();
    this.gt2=new Date(this.book.check_out).getTime();

    console.log(this.da3+1,new Date().getTime());
    
    console.log(this.da1, this.mn1, this.da2, this.mn2,this.da3,this.mn3);
    if (this.da3==new Date().getDate()) {
      if (
        (this.gt1)>= new Date().getTime() &&
        (this.gt2)>= new Date().getTime()
      ) {
        if (
          (this.da1 >= 1 && this.mn1 == 5) ||
          (this.da2 <= 31 && this.mn2 == 5)
        ) {
          alert('no booking is allowed');
          this.msg = '**no booking allowed';
          this.clicked = false;
          return this.router.navigate(['/checkindetails']);
        } else {
          this.restApi.checkin(this.book).subscribe((data: {}) => {
            this.router.navigate(['/payfee']);
          });
          alert(this.message);
        }
      } else {
        alert('pls check checkin and checkout dates');
        this.msg2 = '*please select correct checkin and checkout dates';
      }
    } else {
      alert('pls check booking date');
      this.msg1 = '*please select correct booking date';
    }
  }

}
