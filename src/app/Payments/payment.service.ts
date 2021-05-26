import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Payment } from './Payment';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
//private _url: string = "/assets/mydata/employee.json";
 private _url: string = "http://localhost:8080/HostelMS/payment";

constructor(private http: HttpClient) { }

httpOptions ={

  headers: new HttpHeaders({
    'Content-Type': 'application/json'

  })

}

getPayments(): Observable<Payment[]>{
  return this.http.get<Payment[]>(this._url+'/allpayments');
}

payfees(payment :any): Observable<Payment>{
  return this.http.post<Payment>(this._url + '/createpayment', JSON.stringify(payment), this.httpOptions)
  .pipe(retry(1), catchError(this.handleError));
}

deletePayment(payment_id: number) {
  console.log(payment_id);
  return this.http.delete<Payment>(this._url + '/deletepayment/' + payment_id, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
}

handleError(error: any){
  let errorMessage ='';
  if(error.error instanceof ErrorEvent){
    errorMessage = error.error.message;
    
  }else{
    errorMessage =`Error Code : ${error.status} \n Error Message : ${error.message}`
  }
  window.alert(errorMessage);
  return throwError(errorMessage);

}

}




//deleteEmployee(eid: number) {
  //return this.http.delete<Employee>(this._url + '/delete/' +eid, this.httpOptions)
    //.pipe(retry(1), catchError(this.handleError));
//}




