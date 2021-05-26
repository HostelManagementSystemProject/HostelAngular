import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../Payments/payment.service';
import { UserService } from '../Users/user.service';

@Component({
  selector: 'payfee',
  templateUrl: './payfee.component.html',
  styleUrls: ['./payfee.component.css']
})
export class PayfeeComponent implements OnInit {

  public da1: any;
  public msg: any;

  

  @Input()
  public pay_fee={ due_date:'', date_of_payment:'', amount:'',user:{user_name:this.userService.userNameFromLogin}};
  
  constructor(public restApi: PaymentService,
    public router: Router, public userService: UserService,private datePipe: DatePipe) { }

  private message: String=" Payment has been done successfully!!!";

  ngOnInit(){
    }

  addPayment(){this.pay_fee.date_of_payment = this.datePipe.transform(
    this.pay_fee.date_of_payment,
    'yyyy-MM-dd'
  );

  this.pay_fee.date_of_payment =this.datePipe.transform(this.pay_fee.date_of_payment,'yyyy-MM-dd' );
  this.da1=new Date(this.pay_fee.date_of_payment).getDate();
    if (this.da1>= new Date().getDate()) {
      this.restApi.payfees(this.pay_fee).subscribe((data: {}) => {
        this.router.navigate(['/home']);
      });
      alert(this.message);
    } 
    else {
      alert("please provide correct payment date");
    }
    this.msg = "*Please provide correct payent date";
  }


}
