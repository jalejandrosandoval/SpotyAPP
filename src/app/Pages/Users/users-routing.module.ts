import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLoginComponent } from './Users-Login/users-login.component';
import { UsersRegisterComponent } from './Users-Register/users-register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: UsersLoginComponent },
      { path: 'register', component: UsersRegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
