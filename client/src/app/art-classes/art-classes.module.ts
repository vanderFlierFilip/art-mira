import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtClassesComponent } from './art-classes.component';



@NgModule({
  declarations: [ArtClassesComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule

  ],
  exports: [
    ArtClassesComponent,
  ]
})
export class ArtClassesModule { }
