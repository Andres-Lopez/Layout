import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule,DxDataGridModule,DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule
  ],exports:[
    DxButtonModule,
    DxDataGridModule,
    DxSelectBoxModule
  ]
})
export class DevExtremeModule { }
