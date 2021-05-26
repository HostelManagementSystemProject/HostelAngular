import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './User';
import { userDetails } from './userDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _url: string = "http://localhost:8080/HostelMS/resident";

  constructor(private http: HttpClient) { }
  
  httpOptions ={
  
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
  
    })
  
  }

  public userIdFromLogin;
  public userNameFromLogin;
  public userEmailFromLogin;
  public userPassFromLogin;
  public userCityFromLogin;
  public userStateFromLogin;
  public userCountryFromLogin;
  public userRoomFromLogin;
  public userPhnFromLogin;
  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this._url+'/allresidents');
  }

  getUser(user_id: any): Observable<User> {
    return this.http.get<User>(this._url + '/getresidentbyid/' + user_id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  getUserDetail(user_id: User): Observable<User[]>{
    return this.http.get<User[]>(this._url+'/searchuser/'+ user_id, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));

  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this._url + '/updateresident', JSON.stringify(user), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  
  }
  
  register(user :any, address: any, room: any, food: any): Observable<User>{
    return this.http.post<User>(this._url + '/createresident', JSON.stringify(user, address,room), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  searchUser(uid: any): Observable<User[]>{
    return this.http.get<User[]>(this._url+'/searchresident/'+ uid, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  validate(email_id: User, password: User): Observable<User[]>{
    return this.http.get<User[]>(this._url+'/residentdetails/'+ email_id+'/'+ password, this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  deleteUser(user_id: number) {
    console.log(user_id);
    return this.http.delete<User>(this._url + '/deleteresident/' + user_id, this.httpOptions)
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
