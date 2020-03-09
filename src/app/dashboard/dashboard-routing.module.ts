import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SurveyComponent } from './survey/survey.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'survey', pathMatch: 'full' },
      { path: 'survey', component: SurveyComponent },
      { path: 'blog', component: BlogComponent/* loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) */ }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
