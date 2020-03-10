import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  MAT_NATIVE_DATE_FORMATS,
  MatSelectModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatGridListModule,
  MatCardModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY MMM',
    dateA11yLabel: 'YYYY/MM/DD',
    monthYearA11Label: 'YYYY MMM'
  }
};

@NgModule({
  exports: [
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatMomentDateModule,
    // MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-CN' },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS/* MAT_NATIVE_DATE_FORMATS */  }
  ]
})
export class SharedMaterialModule {
  constructor() {
    console.log(MAT_NATIVE_DATE_FORMATS);
  }
}
