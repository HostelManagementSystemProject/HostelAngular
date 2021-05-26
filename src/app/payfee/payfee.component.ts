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

  

  @Input()
  public pay_fee={ due_date:'', date_of_payment:'', amount:'',user:{user_name:this.userService.userNameFromLogin}};
  
  constructor(public restApi: PaymentService,
    public router: Router, public userService: UserService) { }

  private message: String=" Payment has been done successfully!!!";

  ngOnInit(){
    }

  addPayment(){
    this.restApi.payfees(this.pay_fee).subscribe((data:{}) => { this.router.navigate(['/home'])})
    alert(this.message);
  }


 

}
