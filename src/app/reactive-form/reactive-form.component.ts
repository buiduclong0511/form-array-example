import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  formInfo = this.fb.group({
    infos: this.fb.array([])
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  get infos() {
    return this.formInfo.controls["infos"] as FormArray;
  }

  addInfo() {
    this.infos.push(this.fb.group({
      name: [""],
      age: [""],
      province: [""]
    }))
  }
}
