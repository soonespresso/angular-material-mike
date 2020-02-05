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
  MatInputModule
} from '@angular/material';



@NgModule({
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedMaterialModule { }
