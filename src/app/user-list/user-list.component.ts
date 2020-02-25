import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../connection.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: any;

  constructor(
    private connectionService: ConnectionService
  ) { }

  ngOnInit() {
    this.connectionService.getUser().subscribe((res: any) => {
      this.userList = res;
    });
  }

  deleteUser(id: any) {
    this.connectionService.deleteUser(id).subscribe(res => {
      this.ngOnInit();
    })
  }

}
