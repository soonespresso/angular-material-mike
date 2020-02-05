import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatStepperIntl } from '@angular/material';

export class MySteppIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [{ provide: MatStepperIntl, useClass: MySteppIntl }]
})
export class SurveyComponent implements OnInit {

  // 切换 linear 状态
  isLinear = true;

  surveyForm: FormGroup;

  constructor() {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required)
      })
    });
  }

  // 一个 Step 一个 Form
  /* basicFormGroup: FormGroup;

  constructor() {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  } */

  ngOnInit() {
  }

}
