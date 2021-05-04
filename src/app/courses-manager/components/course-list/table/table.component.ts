import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/courses-manager/models/course';
import { CourseService } from 'src/app/courses-manager/services/course.service';
import { CourseEditComponent } from '../../course-edit/course-edit.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'description', 'specialty', 'edit'];
  dataSource = new MatTableDataSource<Course>();

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  constructor(private courseService: CourseService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  // dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.courseService.getCourses()
    .then(courses =>  { 
      this.dataSource.data = courses;
    }); 
  }

  applyFilter(texto: string){
    this.dataSource.filter = texto.trim().toLocaleLowerCase();
  }

  edit(course:Course){
    console.log("Edit", course);
    this.openDialog(course);
  }

  openDialog(course: Course){
    const dialogRef = this.dialog.open(CourseEditComponent, {
      width: '600px',
      data: course
    });

    dialogRef.afterClosed().subscribe( result => {
      if(!result) {
        console.log("El dialogo fue cerrado");
        return;
      }
      course = result;
      this.snackBar.open('Curso Actualizado', 'Cerrar', {
        duration: 3000,

      });
    })
  }
}
