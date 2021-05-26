import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Complaints } from './Complaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {
  private _url: string = "http://localhost:8080/HostelMS/complaints";

  constructor(private http: HttpClient) { }
  
  httpOptions ={
  
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
  
    })
  
  }
  
  getComplaint(): Observable<Complaints[]>{
    return this.http.get<Complaints[]>(this._url+'/allcomplaints');
  }
  
  addComp(complaint :any): Observable<Complaints>{
    return this.http.post<Complaints>(this._url + '/createcomplaint', JSON.stringify(complaint), this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }
  
  deleteComp(comp_id: number) {
    console.log(comp_id);
    return this.http.delete<Complaints>(this._url + '/deletecomplaint/' + comp_id, this.httpOptions)
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
