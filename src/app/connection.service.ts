import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  public link: String = 'http://localhost:80';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.link}/api.php`, this.httpOptions);
  }

  getUserById(id: any) {
    return this.http.get(`${this.link}/api.php${id}`, this.httpOptions);
  }

  addUser(user: any) {
    return this.http.post(
      `${this.link}/api.php`,
      user,
      this.httpOptions
    );
  }

  editUser(user: any, id: any) {
    return this.http.put(
      `${this.link}/api.php/${id}`,
      user,
      this.httpOptions
    );
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.link}/api.php/${id}`, this.httpOptions);
  }

}
