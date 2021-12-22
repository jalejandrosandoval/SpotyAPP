import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagesPipe } from './NoImages/no-images.pipe';
import { DomSafePipe } from './DomSafe/dom-safe.pipe';

@NgModule({
  declarations: [
    NoImagesPipe,
    DomSafePipe
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    NoImagesPipe,
    DomSafePipe
  ]
})
export class PipesModule { }
