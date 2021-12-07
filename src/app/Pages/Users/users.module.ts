import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { FooterModule } from 'src/app/Components/Shared/footer/footer.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FooterModule
  ]
})
export class UsersModule { }
