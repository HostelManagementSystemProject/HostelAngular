import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaints } from '../Complaints/Complaint';
import { ComplaintService } from '../Complaints/complaint.service';
import { Role } from '../models/role';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'complaintdetails',
  templateUrl: './complaintdetails.component.html',
  styleUrls: ['./complaintdetails.component.css']
})
export class ComplaintdetailsComponent implements OnInit {

  @Input()
  public complaintDetails={complaint_id:'', complaint_name:'', particulars:'', status:''};

  public complaints: any = [];

  public selectedId: number ;

  private message: String="Complaint has been deleted successfully!!!";

  constructor(private router: Router, private authService: AuthService, private comService: ComplaintService, public restApi: ComplaintService) { }

  ngOnInit(): void {
    this.comService.getComplaint().subscribe(data => this.complaints = data)
  }

  addComplaints(){
    this.restApi.addComp(this.complaintDetails).subscribe((data:{}) => { this.router.navigate(['/home'])})
  }

  get isResident() {
    return this.authService.hasRole(Role.Resident);
  }

  onDelete(comp: Complaints) {
    this.selectedId = comp.complaint_id ;
    this.comService.deleteComp(this.selectedId).subscribe((data) => {
      this.router.navigate(['/home']);
      alert(this.message);
    });
  }

}
