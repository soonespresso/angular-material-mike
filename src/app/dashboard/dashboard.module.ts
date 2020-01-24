import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, SharedMaterialModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
