import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagesPipe } from './NoImages/no-images.pipe';

@NgModule({
  declarations: [
    NoImagesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    NoImagesPipe
  ]
})
export class PipesModule { }
