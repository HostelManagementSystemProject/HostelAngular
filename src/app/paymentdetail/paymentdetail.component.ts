import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../Payments/Payment';
import { PaymentService } from '../Payments/payment.service';

@Component({
  selector: 'paymentdetail',
  templateUrl: './paymentdetail.component.html',
  styleUrls: ['./paymentdetail.component.css']
})
export class PaymentdetailComponent implements OnInit {

  public payments: any = [];

  public message:String="Payment detail deleted";

  selectedId: number = 0;
  constructor(public router: Router,
    private payService: PaymentService) { }

  ngOnInit(): void {
    this.payService.getPayments().subscribe(data => this.payments = data)
    
  }

  onDelete(payments : Payment) {
    this.selectedId = payments.payment_id;
    
      this.payService.deletePayment(this.selectedId).subscribe(data => {
        this.router.navigate(['/home'])
        alert(this.message);
        
      })
    
  }

}
