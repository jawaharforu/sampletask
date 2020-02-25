import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  public first_name: any;
  public last_name: any;
  public email: any;
  public mobile: any;
  public dob: any;
  public modified: any;
  public id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private connectionService: ConnectionService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.connectionService.getUserById(this.id).subscribe((res: any) => {
        this.first_name = res.first_name;
        this.last_name = res.last_name;
        this.email = res.email;
        this.mobile = res.mobile;
        this.dob = res.dob;
      })
    });
  }

  ngOnInit() {
  }

  editUser() {
    let user = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      mobile: this.mobile,
      dob: this.dob,
      modified: new Date()
    }
    this.connectionService.editUser(user, this.id).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}
