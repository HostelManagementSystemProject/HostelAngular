import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BookingdetailsComponent } from '../bookingdetails/bookingdetails.component';
import { Booking } from './Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  
  private _url: string = "http://localhost:8080/HostelMS/";

  constructor(private http: HttpClient) { }
  public roomFromBooking;
  
  httpOptions ={
  
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
  
    })
  
  }

  getRooms(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this._url+'room/allrooms');
  }
  
  roomBook(room :any): Observable<Booking>{
    return this.http.post<Booking>(this._url + 'room/addroom', JSON.stringify(room), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  checkin(book: any): Observable<Booking>{
    return this.http.post<Booking>(this._url + 'booking/createbooking', JSON.stringify(book), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  getBookings(): Observable<Booking[]>{
    return this.http.get<Booking[]>(this._url+'/booking/allbookings');
  }

  deleteBooking(b_id:number){
    console.log(b_id);
    return this.http.delete<Booking>(this._url+'booking/deletebooking/'+b_id,this.httpOptions).pipe(retry(1),catchError(this.handleError));
  }

  createRoom(room: any): Observable<Booking> {
    return this.http.post<Booking>(this._url + 'room/addroom', JSON.stringify(room), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }
  deleteRoom(room_no:number){
    console.log(room_no);
    return this.http.delete<Booking>(this._url+'room/deleteroom/'+room_no,this.httpOptions).pipe(retry(1),catchError(this.handleError));
  }
  updateRoom(r_oom:Booking):Observable<Booking>{
    return this.http.put<Booking>(this._url+'room/updateroom',JSON.stringify(r_oom),this.httpOptions).pipe(retry(1),catchError(this.handleError));
  }
  getRoomById(room_no: any): Observable<Booking> {
    return this.http.get<Booking>(this._url + 'room/getroombyid/'+room_no, this.httpOptions)
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
