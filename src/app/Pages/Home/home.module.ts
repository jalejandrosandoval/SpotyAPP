import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavBarModule } from 'src/app/Components/Shared/nav-bar/nav-bar.module';
import { UsersModule } from '../Users/users.module';
import { FooterModule } from 'src/app/Components/Shared/footer/footer.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavBarModule,
    FooterModule,
    UsersModule,
    FooterModule
  ],
  exports:[
      HomeComponent
  ]
})
export class HomeModule { }
