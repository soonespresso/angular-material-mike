import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule } from '@angular/material';



@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    // 按钮开关
    MatButtonToggleModule,
    // 涟漪效果
    MatRippleModule
  ],
  exports: [MatButtonModule, MatIconModule, MatButtonToggleModule, MatRippleModule]
})
export class SharedMaterialModule { }
