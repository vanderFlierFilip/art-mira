import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworkDetailsComponent } from './artwork-details.component';



@NgModule({
  declarations: [ArtworkDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [ArtworkDetailsComponent]
})
export class ArtworkDetailsModule { }
