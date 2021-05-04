import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseEditComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course
  ) {
    course.startDate = new Date(course.startDate).toISOString();
   }

  ngOnInit(): void {
  }

  update(){
    this.dialogRef.close(this.course);
  }

  cancel(){
    this.dialogRef.close();
  }
}
