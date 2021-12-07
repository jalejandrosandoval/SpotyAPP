import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLoginComponent } from './Users-Login/users-login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: UsersLoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
