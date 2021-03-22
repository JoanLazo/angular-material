import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CoursesManagerComponent } from './courses-manager.component';

const routes: Routes = [
  {
    path: '', component: CoursesManagerComponent,
      children: [
        {
          path: '',
          redirectTo: 'list',
        },
        {
          path: 'add',
          component: CourseAddComponent,
        },
        {
          path: 'list',
          component: CourseListComponent,
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesManagerRoutingModule { }
