import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
