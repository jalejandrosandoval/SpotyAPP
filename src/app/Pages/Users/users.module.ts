import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Modules and Componentes Own
import { UsersRoutingModule } from './users-routing.module';
import { FooterModule } from 'src/app/Components/Shared/footer/footer.module';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { UsersLoginComponent } from './Users-Login/users-login.component';
import { UsersRegisterComponent } from './Users-Register/users-register.component';

@NgModule({
  declarations: [
    UsersLoginComponent,
    UsersRegisterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
})
export class UsersModule { }