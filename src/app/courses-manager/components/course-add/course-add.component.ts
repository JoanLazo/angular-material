import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { Course } from '../../models/course';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  course: Course = {};
  categories: Category[] = [
    {
      name: 'angular',
      checked: false,
    },
    {
      name: 'javascript',
      checked: false,
    },
    {
      name: 'react',
      checked: false,
    },
    {
      name: 'mobile',
      checked: false,
    },
  ];
  category: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.course.categories = this.categories.filter( e => e.checked == true)
    .map(c => c.name);
    
    console.log("this.course: " + JSON.stringify(this.course));
    
  }
}
