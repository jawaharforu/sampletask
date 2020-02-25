import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  public first_name: any;
  public last_name: any;
  public email: any;
  public mobile: any;
  public dob: any;
  public modified: any;
  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addUser() {
    let user = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      mobile: this.mobile,
      dob: this.dob,
      modified: new Date()
    }
    this.connectionService.addUser(user).subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}
