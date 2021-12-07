import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import Components
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent
  ]
})
export class FooterModule { }
