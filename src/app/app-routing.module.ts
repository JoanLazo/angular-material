import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo', 
    //lazy loading
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoModule)
  },
  {
    path: 'manager', 
    //lazy loading
    loadChildren: () => import('./courses-manager/courses-manager.module').then( m => m.CoursesManagerModule)
  },
  {
    path: '**',
    redirectTo: 'demo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
