import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Users/User';
import { UserService } from '../Users/user.service';

@Component({
  selector: 'residentdetails',
  templateUrl: './residentdetails.component.html',
  styleUrls: ['./residentdetails.component.css']
})
export class ResidentdetailsComponent implements OnInit {

  @Input()
  public user:any={}

  selectedId: number = 0;

  
  public message:String="User detail has been deleted successfully!!!!";

  constructor(public router: Router,
    private userService: UserService) { }

    ngOnInit(): void {
      this.userService.getUsers().subscribe(data => this.user = data);
    }

    onDelete(user : User) {
      this.selectedId = user.user_id;
      
        this.userService.deleteUser(this.selectedId).subscribe(data => {
          this.router.navigate(['/home'])
          alert(this.message);
          
        })
      
    }

}
