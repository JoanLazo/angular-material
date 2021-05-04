import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesManagerRoutingModule } from './courses-manager-routing.module';
import { CoursesManagerComponent } from './courses-manager.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CardsComponent } from './components/course-list/cards/cards.component';
import { TreeComponent } from './components/course-list/cards/tree/tree.component';
import { ExpansionComponent } from './components/course-list/expansion/expansion.component';
import { TableComponent } from './components/course-list/table/table.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';


@NgModule({
  entryComponents: [CourseEditComponent],
  declarations: [CoursesManagerComponent, SidenavComponent, CourseAddComponent, CourseListComponent, CardsComponent, TreeComponent, ExpansionComponent, TableComponent, CourseEditComponent],
  imports: [
    CommonModule,
    CoursesManagerRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CoursesManagerModule { }
