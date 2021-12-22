import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagesPipe } from './NoImages/no-images.pipe';
import { DomSafePipe } from './DomSafe/dom-safe.pipe';
import { CapitalizePipe } from './Capitalize/capitalize.pipe';

@NgModule({
  declarations: 
  [
    NoImagesPipe,
    DomSafePipe,
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports:
  [
    NoImagesPipe,
    DomSafePipe,
    CapitalizePipe
  ]
})
export class PipesModule { }
