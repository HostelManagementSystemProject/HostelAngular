import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from './Bookings/booking.service';
import { Role } from './models/role';
import { AuthService } from './services/auth.service';
import { UserService } from './Users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HostelMngSys';
  constructor(private router: Router, private authService: AuthService, private userService: UserService, private bookService: BookingService) { }

  public name= this.userService.userNameFromLogin;

  get isAuthorized() {
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  get isResident() {
    return this.authService.hasRole(Role.Resident);
  }

  public room:any={room_no :this.bookService.roomFromBooking};

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  ngOnInit() {
    if(this.authService.isAuthorized()){
      this.router.navigate(['login']);
    }
  }
}
