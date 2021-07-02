import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  formInfo = this.fb.group({
    infoArr: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  infoArr() {
    return this.formInfo.get("infoArr") as FormArray;
  }

  addInfoArr() {
    this.infoArr().push(this.fb.group({
      name: [""],
      age: [""],
      hobbies: this.fb.array([])
    }));
  }

  hobbies(index: number) {
    return this.infoArr().at(index).get("hobbies") as FormArray;
  }

  addHobby(index: number) {
    this.hobbies(index).push(this.fb.group({
      hobbyName: [""]
    }));
  }

  handleSubmit() {
    console.log(this.formInfo.value);
  }
}
