import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentsModule } from '../students/students.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    StudentsModule,
    MatIconModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
