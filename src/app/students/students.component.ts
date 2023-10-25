import { Component, OnDestroy } from '@angular/core';
import { Student, StudentsService } from './students.service';
import { Observable, Subscription, map, take } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnDestroy {
  students$: Observable<Student[]>;
  mayores$: Observable<Student[]>;

  total = 0;
  totalSuscription: Subscription;

  constructor(private studentsService: StudentsService) {
    this.students$ = this.studentsService.getStudents();

    this.mayores$ = this.students$
    .pipe(map((data) => data.filter( student => student.age >= 10))
    );


    this.totalSuscription = this.studentsService.getTotal()
    .pipe(take(51))
    .subscribe({
        next: (v) => {
          this.total = v;
        },
      });

  }

  ngOnDestroy(): void {
    this.totalSuscription.unsubscribe() 
  }
}
