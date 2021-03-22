import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/courses-manager/models/course';
import { CourseService } from 'src/app/courses-manager/services/course.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  courses: Course[];
  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseService.getCourses()
    .then( courses => this.courses = courses);
  }

}
