import { ArtClassesRoutingModule } from './art-classes-routing.module';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtClassesComponent } from './art-classes.component';
import { ArtClassesDetailsComponent } from './art-classes-details /art-classes-details.component';



@NgModule({
  declarations: [ArtClassesComponent, ArtClassesDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ArtClassesRoutingModule

  ],
  exports: [
    ArtClassesComponent
  ] 
})
export class ArtClassesModule { }
