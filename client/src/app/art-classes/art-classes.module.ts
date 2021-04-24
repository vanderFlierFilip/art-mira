import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtClassesComponent } from './art-classes.component';



@NgModule({
  declarations: [ArtClassesComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ArtClassesComponent
  ]
})
export class ArtClassesModule { }
