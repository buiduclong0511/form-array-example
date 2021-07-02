import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { user } from '../api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(user.getUserUrl);
  }

  getInfo(token: string) {
    let headers = new HttpHeaders();
    headers = headers.append("Authorization", `Bearer ${token}`)

    return this.http.get(user.getInfoUrl, { headers: headers });
  }
}
