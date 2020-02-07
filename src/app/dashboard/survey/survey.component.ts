import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatStepperIntl, ErrorStateMatcher } from '@angular/material';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class MySteppIntl extends MatStepperIntl {
  optionalLabel = '非必填';
}

/**
 * 调整时机为 invalid + dirty 显示错误信息
 */
export class EarlyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    const isSubmitted = form && form.submitted;
    return control && control.invalid && control.dirty;
  }
}

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss'],
  providers: [
    { provide: MatStepperIntl, useClass: MySteppIntl },
    { provide: ErrorStateMatcher, useClass: EarlyErrorStateMatcher }
  ]
})
export class SurveyComponent implements OnInit {

  // 切换 linear 状态
  isLinear = true;

  surveyForm: FormGroup;

  earlyErrorStateMatcher = new EarlyErrorStateMatcher();

  countries$: Observable<any[]>;

  majorTechList: any[];

  constructor(private httpClient: HttpClient) {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required),
        intro: new FormControl('', [Validators.required, Validators.minLength(10)]),
        country: new FormControl(''),
        majorTech: new FormControl('')
      })
    });

    this.majorTechList = [
      {
        name: '前端', items: ['HTML', 'CSS', 'JavaScript']
      },
      {
        name: '后端', items: ['Java', 'NodeJS', 'Go']
      }
    ];
  }

  // 一个 Step 一个 Form
  /* basicFormGroup: FormGroup;

  constructor() {
    this.basicFormGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  } */

  ngOnInit() {
    // this.countries$ = this.httpClient.get<any[]>('assets/countries.json');
    this.surveyForm
        .get('basicQuestions').get('country')
        .valueChanges.pipe(debounceTime(300)).subscribe(value => {
          this.countries$ = this.httpClient.get('assets/countries.json').pipe(map((countries: any[]) => {
            const list = countries.filter(country => country.name.indexOf(value) >= 0);
            return list;
          }));
        });
        // tslint:disable-next-line:only-arrow-functions
        /* .valueChanges.subscribe(function() {
          console.log(arguments);
        }); */
  }

  highlightFiltered(countryName: string) {
    const inputCountry = this.surveyForm.get('basicQuestions').get('country').value;
    return countryName.replace(inputCountry, `<span class="autocomplete-highlight">${inputCountry}</span>`);
  }

  displayCountry(country: any) {
    if (country) {
      return `${country.name} / ${country.code}`;
    }
    return '';
  }
}
