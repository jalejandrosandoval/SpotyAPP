import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersLoginRoutingModule } from './users-login-routing.module';
import { UsersLoginComponent } from '../users-login/users-login.component';


@NgModule({
  declarations: [
    UsersLoginComponent
  ],
  imports: [
    CommonModule,
    UsersLoginRoutingModule
  ]
})
export class UsersLoginModule { }
