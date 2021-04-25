import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtworksShopComponent } from './artworks-shop.component';



@NgModule({
  declarations: [ArtworksShopComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ArtworksShopComponent]
})
export class ArtworksShopModule { }
