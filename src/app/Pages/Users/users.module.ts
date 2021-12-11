import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import Modules
import { UsersRoutingModule } from './users-routing.module';
import { FooterModule } from 'src/app/Components/Shared/footer/footer.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AuthService } from 'src/app/Services/Auth/auth.service';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersLoginComponent } from './Users-Login/users-login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    UsersLoginComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FooterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      positionClass: "toast-top-right",
      preventDuplicates: true
    })
  ],
  providers: [
    AuthService
  ]
})
export class UsersModule { }
