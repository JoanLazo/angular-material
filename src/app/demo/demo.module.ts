import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ArbolComponent } from './arbol/arbol.component';
import { TablaComponent } from './tabla/tabla.component';
import { TableroComponent } from './tablero/tablero.component';
import { MaterialModule } from '../material/material.module';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    TableroComponent,
    TablaComponent,
    ArbolComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule
  ]
})
export class DemoModule { }
