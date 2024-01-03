import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
      path: 'admin',
      component: AdminComponent,
      
    },
    {
    path: 'admin/login',
     component: LoginComponent,
    },
    {
        path: 'admin/signup', 
        component: SignupComponent
    },
    {
        path: 'admin/dashboard',
         component: DashboardComponent
        },
        
  ];
@NgModule({
  declarations: [AdminComponent,SignupComponent, LoginComponent,DashboardComponent],
  imports: [   [RouterModule.forChild(routes)],
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AdminModule { }
