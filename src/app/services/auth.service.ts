import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { auth } from '../api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login = (body: {
    email: string;
    password: string;
  }) => {
    return this.http.post(auth.loginUrl, body)
  };
}
