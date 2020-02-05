import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { SurveyComponent } from './survey/survey.component';


@NgModule({
  declarations: [DashboardComponent, SurveyComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule
  ]
})
export class DashboardModule { }
