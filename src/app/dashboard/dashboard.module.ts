import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [DashboardComponent, SurveyComponent, BlogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedMaterialModule
  ]
})
export class DashboardModule { }
