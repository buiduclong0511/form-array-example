import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

import { AuthService, UserService } from "../services";

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent implements OnInit {
  
  constructor(
    private userService: UserService, 
    private fb: FormBuilder,
    private authService: AuthService
  ) { }
    
  users: any[] =  []

  info: any;

  formLogin = this.fb.group({
    email: ["buiduclong0511@gmail.com", [Validators.required, Validators.email]],
    password: ["123@abc", [Validators.required]]
  })

  token: string = "";

  ngOnInit(): void {
    this.userService.getUser().subscribe((res: any) => {
      setTimeout(() => this.users = res, 1000)
    })
  }

  handleLogin = () => {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value).subscribe((res: any) => {
        this.token += res.meta.token;
        window.localStorage.setItem("token", this.token);
      })
    }
  };

  handleGetInfo = () => {
    this.userService.getInfo(this.token).subscribe((res: any) => {
      console.log(res)
    })
  };
}
