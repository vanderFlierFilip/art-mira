import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworksShopComponent } from './artworks-shop.component';



@NgModule({
  declarations: [ArtworksShopComponent],
  imports: [
    CommonModule
  ],
  exports: [ArtworksShopComponent]
})
export class ArtworksShopModule { }
