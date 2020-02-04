import { NgModule } from '@angular/core';
import { MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatListModule, MatMenuModule } from '@angular/material'



@NgModule({
  imports: [
    MatMenuModule, MatListModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule
  ],
  exports: [
    MatMenuModule, MatListModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule
  ]
})
export class SharedMaterialModule { }
