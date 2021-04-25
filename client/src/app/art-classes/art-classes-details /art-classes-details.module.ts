import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtClassesDetailsComponent } from './art-classes-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ArtClassesDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ArtClassesDetailsComponent]
})
export class ArtClassesDetailsModule { }
