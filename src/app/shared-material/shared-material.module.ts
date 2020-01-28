import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material'



@NgModule({
  imports: [
    MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule
  ]
})
export class SharedMaterialModule { }
