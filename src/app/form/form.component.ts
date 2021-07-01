import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  info = {
    username: "",
    password: "",
    gender: "",
    hobbies: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmitForm(form: any) {
    console.log("value", form.value);
  }
}
