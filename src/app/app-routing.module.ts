import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule, Router, ROUTES} from '@angular/router'

import {EmployeeComponent} from './employee/employee.component'


const routes: Routes = [
  { path: 'employee', component: EmployeeComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
    
})
export class AppRoutingModule { }
