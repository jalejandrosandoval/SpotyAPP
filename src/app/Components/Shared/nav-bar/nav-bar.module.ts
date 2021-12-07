import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Components
import { NavBarComponent } from './nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
