import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  data = [
    {
      name: "Bùi Đức Long",
      age: "21",
      hobbies: [
        {
          hobbyName: "hobby 0"
        },
        {
          hobbyName: "hobby 1"
        },
        {
          hobbyName: "hobby 2"
        },
      ]
    },
    {
      name: "Nguyễn Việt Dũng",
      age: "21",
      hobbies: [
        {
          hobbyName: "hobby 0"
        },
        {
          hobbyName: "hobby 1"
        },
        {
          hobbyName: "hobby 2"
        },
      ]
    },
    {
      name: "Trần Tuấn Dũng",
      age: "21",
      hobbies: [
        {
          hobbyName: "hobby 0"
        },
        {
          hobbyName: "hobby 1"
        },
      ]
    },
  ]
  
  formInfo = this.fb.group({
    infoArr: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.data.forEach((item, index) => {
      this.addInfoArr(item)
      item.hobbies.forEach(hobby => {
        this.addHobby(index, hobby);
      })
    })
  }

  infoArr() {
    return this.formInfo.get("infoArr") as FormArray;
  }

  addInfoArr(data?: any) {
    this.infoArr().push(this.fb.group({
      name: [data ? data.name : ""],
      age: [data ? data.age: ""],
      hobbies: this.fb.array([])
    }));
  }

  hobbies(index: number) {
    return this.infoArr().at(index).get("hobbies") as FormArray;
  }

  addHobby(index: number, data?: any) {
    this.hobbies(index).push(this.fb.group({
      hobbyName: [data ? data.hobbyName : ""]
    }));
  }

  handleSubmit() {
    console.log(this.formInfo.value);
    console.log(this.data);
  }
}
