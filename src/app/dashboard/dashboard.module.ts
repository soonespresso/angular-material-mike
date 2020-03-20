import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { SurveyComponent } from './survey/survey.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { AddPostDialogComponent } from './blog/add-post-dialog/add-post-dialog.component';
import { AddPostConfirmDialogComponent } from './blog/add-post-confirm-dialog/add-post-confirm-dialog.component';
import { AfterPostNotifyComponent } from './blog/after-post-notify/after-post-notify.component';


@NgModule({
  entryComponents: [AddPostDialogComponent, AddPostConfirmDialogComponent, AfterPostNotifyComponent],
  declarations: [
    DashboardComponent, SurveyComponent, BlogComponent, AddPostDialogComponent, AddPostConfirmDialogComponent, AfterPostNotifyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    SharedMaterialModule
  ]
})
export class DashboardModule { }
