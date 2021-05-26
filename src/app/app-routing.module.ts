import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AppComponent } from './app.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './app-routing.guard';
import { AuthService } from './services/auth.service';
import { Role } from './models/role';
import { RegistrationComponent } from './registration/registration.component';
import { ResidentdetailsComponent } from './residentdetails/residentdetails.component';
import { StaffdetailsComponent } from './staffdetails/staffdetails.component';
import { AddstaffComponent } from './addstaff/addstaff.component';
import { RoomdetailsComponent } from './roomdetails/roomdetails.component';
import { ComplaintdetailsComponent } from './complaintdetails/complaintdetails.component';
import { AbouthostelComponent } from './abouthostel/abouthostel.component';
import { HostelregistrationComponent } from './hostelregistration/hostelregistration.component';
import { PaymentdetailComponent } from './paymentdetail/paymentdetail.component';
import { EditresidentComponent } from './editresident/editresident.component';
import { EditstaffComponent } from './editstaff/editstaff.component';
import { PayfeeComponent } from './payfee/payfee.component';
import { CheckindetailsComponent } from './checkindetails/checkindetails.component';
import { RoombookComponent } from './roombook/roombook.component';
import { BookingdetailsComponent } from './bookingdetails/bookingdetails.component';
import { EditroomComponent } from './editroom/editroom.component';
import { AddroomComponent } from './addroom/addroom.component';


const routes: Routes = [
  {path:'',component: AbouthostelComponent},
  {
    path:'registration',
    children:[
      {path:'', component: RegistrationComponent},
      {
      path:'login', component: LoginComponent
    }
    ]
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [
        Role.Admin,
      ]
    },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {path:'login', component: LoginComponent},
  {path:'residentdetails', component: ResidentdetailsComponent},
  {path:'staffdetails', component: StaffdetailsComponent},
  {path:'addstaff', component: AddstaffComponent},
  {path:'roomdetails', component: RoomdetailsComponent},
  {path:'complaintdetails', component: ComplaintdetailsComponent},
  {path:'abouthostel', component: AbouthostelComponent},
  {path:'hostelregistration', component: HostelregistrationComponent},
  {path:'paymentdetails', component: PaymentdetailComponent},
  {path:'profile', component: ProfileComponent},
  {path:'editresident/:user_id', component: EditresidentComponent},
  {path:'editstaff', component: EditstaffComponent},
  {path:'payfee', component: PayfeeComponent},
  {path:'home', component: HomeComponent},
  {path:'bookingdetails', component: BookingdetailsComponent},
  {path:'checkindetails', component: CheckindetailsComponent},
  {path:'editroom/:room_no', component: EditroomComponent},
  {path:'addroom', component: AddroomComponent},
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule { }

