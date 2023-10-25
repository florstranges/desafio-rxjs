import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getTotal(): Observable<number>{
    return interval(80);
  }

  getStudents(): Observable<Student[]>{
    return new Observable((suscriber) => {
      suscriber.next([
        {
          id: 1,
          name: 'Bart Simpson',
          age: 10
        },
        {
          id: 2,
          name: 'Lisa Simpson',
          age: 8
        },
        {
          id: 3,
          name: 'Nelson Muntz',
          age: 11
        },
        {
          id: 4,
          name: 'Raffa Gorgory',
          age: 9
        },
      ])
      suscriber.complete();
    })
  }
}
