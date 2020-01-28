import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [MatMenuModule, MatSelectModule, MatTableModule,MatToolbarModule]
})
export class materials {}