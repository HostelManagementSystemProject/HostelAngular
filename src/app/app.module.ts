import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './registration/registration.component';
import { AbouthostelComponent } from './abouthostel/abouthostel.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';
import { HostelregistrationComponent } from './hostelregistration/hostelregistration.component';
import { ResidentdetailsComponent } from './residentdetails/residentdetails.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { ComplaintdetailsComponent } from './complaintdetails/complaintdetails.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { EditresidentComponent } from './editresident/editresident.component';
import { EditstaffComponent } from './editstaff/editstaff.component';
import { PayfeeComponent } from './payfee/payfee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoombookComponent } from './roombook/roombook.component';
import { CheckindetailsComponent } from './checkindetails/checkindetails.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { ProfileComponent } from './profile/profile.component';
import { DatePipe } from '@angular/common';
import { EditroomComponent } from './editroom/editroom.component';
import { AddroomComponent } from './addroom/addroom.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ListuserComponent,
    LoginComponent,
    PagenotfoundComponent,
    RegistrationComponent,
    AbouthostelComponent,
    PaymentdetailComponent,
    HostelregistrationComponent,
    ResidentdetailsComponent,
    StaffdetailsComponent,
    AddstaffComponent,
    ComplaintdetailsComponent,
    RoomdetailsComponent,
    EditresidentComponent,
    EditstaffComponent,
    PayfeeComponent,
    RoombookComponent,
    CheckindetailsComponent,
    BookingdetailsComponent,
    ProfileComponent,
    EditroomComponent,
    AddroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
