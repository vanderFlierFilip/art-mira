import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtCollectionsComponent } from './art-collections.component';



@NgModule({
  declarations: [ArtCollectionsComponent],
  imports: [
    CommonModule
  ],
  exports: [ArtCollectionsComponent]
})
export class ArtCollectionsModule { }
