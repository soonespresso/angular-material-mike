import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatListModule } from '@angular/material'



@NgModule({
  imports: [
    MatListModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatListModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule
  ]
})
export class SharedMaterialModule { }
