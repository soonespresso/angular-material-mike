import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {
  MatStepperIntl,
  ErrorStateMatcher,
  MatDatepickerInputEvent,
  MAT_LABEL_GLOBAL_OPTIONS,
  MatCheckboxChange,
  MAT_CHECKBOX_CLICK_ACTION
} from '@angular/material';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';

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
    { provide: ErrorStateMatcher, useClass: EarlyErrorStateMatcher },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
    { provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check-indeterminate' } // noop | check | check-indeterminate
  ]
})
export class SurveyComponent implements OnInit {

  // 切换 linear 状态
  isLinear = true;

  surveyForm: FormGroup;

  earlyErrorStateMatcher = new EarlyErrorStateMatcher();

  countries$: Observable<any[]>;

  majorTechList: any[];
  interestList: any[];
  nestInterestList: any[];

  startDate: moment.Moment;
  minDate: moment.Moment;
  maxDate: moment.Moment;

  indeterminateSelectedPayFor: boolean;

  get selectedColorRed() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorRed').value;
  }
  get selectedColorGreen() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorGreen').value;
  }
  get selectedColorBlue() {
    return this.surveyForm.get('otherQuestions').get('favoriteColorBlue').value;
  }
  get selectedColorStyle() {
    return `rgb(${this.selectedColorRed}, ${this.selectedColorGreen}, ${this.selectedColorBlue})`;
  }

  constructor(private httpClient: HttpClient) {
    this.surveyForm = new FormGroup({
      basicQuestions: new FormGroup({
        name: new FormControl('', Validators.required),
        intro: new FormControl('', [Validators.required, Validators.minLength(10)]),
        country: new FormControl(''),
        majorTech: new FormControl(''),
        birthday: new FormControl({ value: '', disabled: false }),
        interest: new FormControl(null)
      }),
      mainQuestions: new FormGroup({
        payForAll: new FormControl(false),
        payForBook: new FormControl(false),
        payForMusic: new FormControl(false),
        payForMovie: new FormControl(true),

        angularLikeScore: new FormControl(5),
        angularMaterialLikeScore: new FormControl(5),

        subscribeAngular: new FormControl(true),
        subscribeAngularMaterial: new FormControl(true),
        subscribeNgRx: new FormControl(false)
      }),
      otherQuestions: new FormGroup({
        favoriteColorRed: new FormControl(0),
        favoriteColorGreen: new FormControl(0),
        favoriteColorBlue: new FormControl(0),
        surveyScore: new FormControl(5)
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
    this.interestList = [
      { id: 1, name: '桌球' },
      { id: 2, name: '网球' },
      { id: 3, name: '羽毛球' },
      { id: 4, name: '篮球' },
      { id: 5, name: '乒乓球' }
    ];
    this.nestInterestList = [
      {
        id: 1,
        name: '球类',
        subItems: [
          { id: 11, name: '桌球' },
          { id: 12, name: '网球' },
          { id: 13, name: '篮球' }
        ]
      },
      {
        id: 2,
        name: '其他',
        subItems: [
          { id: 21, name: '游泳' },
          { id: 22, name: '跑步' }
        ]
      }
    ];


    this.startDate = moment(new Date(2020, 1, 7)); // 2020-2-7
    this.minDate = moment(new Date(2020, 0, 14)); // moment('2020-1-14');
    this.maxDate = moment(new Date(2020, 1, 27)); // moment('2020-2-29');
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


  familyDayFilter(date: moment.Moment) {
    const day = date.day();
    return day !== 2 && day !== 5;
  }

  logDateInput($event: /* any */MatDatepickerInputEvent<moment.Moment>) {
    console.log('logDateInput');
    console.log($event);
  }

  logDateChange($event: /* any */MatDatepickerInputEvent<moment.Moment>) {
    console.log('logDateChange');
    console.log($event);
  }


  checkAllChange($event: MatCheckboxChange) {
    const mainQuestions: FormGroup = this.surveyForm.get('mainQuestions') as FormGroup;
    mainQuestions.get('payForBook').setValue($event.checked);
    mainQuestions.get('payForMusic').setValue($event.checked);
    mainQuestions.get('payForMovie').setValue($event.checked);
    // setValue 不会触发 payForChange
  }

  payForChange() {
    console.log('payForChange');
    this._setSelectAllState();
  }

  private _setSelectAllState() {
    const mainQuestions: FormGroup = this.surveyForm.get('mainQuestions') as FormGroup;
    const payForBookValue = mainQuestions.get('payForBook').value ? 1 : 0;
    const payForMusicValue = mainQuestions.get('payForMusic').value ? 1 : 0;
    const payForMovieValue = mainQuestions.get('payForMovie').value ? 1 : 0;
    const count = payForBookValue + payForMusicValue + payForMovieValue;
    mainQuestions.get('payForAll').setValue(count === 3);
    this.indeterminateSelectedPayFor = count > 0 && count < 3;
  }
}
