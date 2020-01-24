import { NgModule } from '@angular/core';
import { MatSidenavModule, MatButtonModule, MatToolbarModule } from '@angular/material';


@NgModule({
  imports: [
    MatSidenavModule, MatButtonModule, MatToolbarModule
  ],
  exports: [MatSidenavModule, MatButtonModule, MatToolbarModule]
})
export class SharedMaterialModule { }
