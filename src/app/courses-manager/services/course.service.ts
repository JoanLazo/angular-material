import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const data: Course[] = [
  {
    id: 0,
    name: 'Angular desde Cero',
    description: 'Angular es un framework para el desarrollo web...',
    specialty: 'angular',
    startDate: '10/11/2019',
    categories: ['web','angular','javascript'],
    isActive: true,
    level: 5
  },
  {
    id: 1,
    name: 'Typescript desde Cero',
    description: 'Typescript es un framework para el desarrollo web...',
    specialty: 'Typescript',
    startDate: '05/10/2019',
    categories: ['web','angular','javascript'],
    isActive: true,
    level: 3
  },
]

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Promise<Course[]> {
    return new Promise( (resolve, rejects) => {
      resolve(data);
    });
  }
}
