// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-area',
  template: `
    form goes here...
    
    <form [formGroup]="angularForm">
      <div>
        <input type="text" formControlName="firstName">
      </div>
      <div>
        <input type="text" formControlName="age">
      </div>
      <div>
        <input type="text" formControlName="lastName">
      </div>
      <div>
        <input type="text" formControlName="twitter">
      </div>
    </form>

    <p>Form value : <br> {{angularForm.value | json}}</p>
    `,
  styles: [ `
    input{
      font-size : 1em
    }
    p{
      color : red
    }
  `]
})

export class MainAppComponent implements OnInit {
  angularForm : FormGroup;
  angularForm = this.fb.group({
    firstName: ['Coder........hello'],
    age: ['25'],
    lastName: ['Byte'],
    twitter: ['@coderbyte']
  });

  constructor(private fb: FormBuilder){}

  ngOnit(){
    const formDataObj = {};
    for (const prop of Object.keys(this.person)){
      formDataObj[prop] = new FormControl(this.person[prop]);
      this.personProps.push(prop);
    }
    this.form = new FormGroup(formDataObj);
  }
}